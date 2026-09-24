import { SITE } from '@/lib/site';

export interface WeatherNow {
  temp: number;
  feels: number;
  humidity: number;
  wind: number; // km/h
  precipProb: number; // %
  code: number; // WMO weather code
}

export interface WeatherDay {
  date: string; // YYYY-MM-DD
  code: number;
  tMax: number;
  tMin: number;
  precipProb: number;
  uv: number;
  wind: number;
}

export interface WeatherData {
  now: WeatherNow;
  days: WeatherDay[];
  fetchedAt: number;
}

const TTL_SECONDS = 600; // 10 minutes
const CACHE_KEY = 'https://tritonsfountainmalta.com/weather-cache';

// WMO weather interpretation codes → short label per locale.
type Dict = Record<number, string>;

const WMO: Record<string, Dict> = {
  en: {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Fog', 48: 'Rime fog',
    51: 'Light drizzle', 53: 'Drizzle', 55: 'Dense drizzle',
    56: 'Freezing drizzle', 57: 'Freezing drizzle',
    61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
    66: 'Freezing rain', 67: 'Freezing rain',
    71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 77: 'Snow grains',
    80: 'Rain showers', 81: 'Rain showers', 82: 'Violent rain showers',
    85: 'Snow showers', 86: 'Snow showers',
    95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Thunderstorm with hail',
  },
  zh: {
    0: '晴朗', 1: '大致晴朗', 2: '局部多云', 3: '阴天',
    45: '雾', 48: '雾凇',
    51: '小毛毛雨', 53: '毛毛雨', 55: '浓毛毛雨',
    56: '冻毛毛雨', 57: '冻毛毛雨',
    61: '小雨', 63: '中雨', 65: '大雨',
    66: '冻雨', 67: '冻雨',
    71: '小雪', 73: '雪', 75: '大雪', 77: '雪粒',
    80: '阵雨', 81: '阵雨', 82: '强阵雨',
    85: '阵雪', 86: '阵雪',
    95: '雷阵雨', 96: '雷阵雨伴冰雹', 99: '雷阵雨伴冰雹',
  },
  it: {
    0: 'Sereno', 1: 'Precipuamente sereno', 2: 'Parzialmente nuvoloso', 3: 'Coperto',
    45: 'Nebbia', 48: 'Nebbia gelata',
    51: 'Pioggerella lieve', 53: 'Pioggerella', 55: 'Pioggerella densa',
    56: 'Pioggia gelata', 57: 'Pioggia gelata',
    61: 'Pioggia lieve', 63: 'Pioggia', 65: 'Pioggia forte',
    66: 'Pioggia gelata', 67: 'Pioggia gelata',
    71: 'Neve lieve', 73: 'Neve', 75: 'Neve forte', 77: 'Granelli di neve',
    80: 'Rovesci', 81: 'Rovesci', 82: 'Forti rovesci',
    85: 'Rovesci di neve', 86: 'Rovesci di neve',
    95: 'Temporale', 96: 'Temporale con grandine', 99: 'Temporale con grandine',
  },
  mt: {
    0: 'Semà ċar', 1: 'Żifjed ċar', 2: 'Parzjalment imhaddem', 3: 'Mgħotti',
    45: 'Ċpar', 48: 'Ċpar silt',
    51: 'Xita ħafifa', 53: 'Xita', 55: 'Xita densa',
    56: 'Xita silġ', 57: 'Xita silġ',
    61: 'Xita ħafifa', 63: 'Xita', 65: 'Xita qawwija',
    66: 'Xita silġ', 67: 'Xita silġ',
    71: 'Borra ħafifa', 73: 'Borra', 75: 'Borra qawwija', 77: 'Ġnub tal-borra',
    80: 'Xita tax-xita', 81: 'Xita tax-xita', 82: 'Xita qawwija',
    85: 'Borra tax-xita', 86: 'Borra tax-xita',
    95: 'Tempesta', 96: 'Tempesta bil-ġojjoli', 99: 'Tempesta bil-ġojjoli',
  },
};

export function weatherText(code: number, locale: string): string {
  const dict = WMO[locale] || WMO.en;
  return dict[code] || dict[3] || '—';
}

// Simple precipitation detection from WMO code.
export function isPrecipitation(code: number): boolean {
  return (
    (code >= 51 && code <= 67) ||
    (code >= 71 && code <= 77) ||
    (code >= 80 && code <= 86) ||
    code === 95 ||
    code === 96 ||
    code === 99
  );
}

function buildUrl(): string {
  const p = new URLSearchParams({
    latitude: String(SITE.latitude),
    longitude: String(SITE.longitude),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation_probability',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,wind_speed_10m_max',
    timezone: 'auto',
    forecast_days: '7',
  });
  return `https://api.open-meteo.com/v1/forecast?${p.toString()}`;
}

let memCache: { ts: number; data: WeatherData } | null = null;

async function fetchOpenMeteo(): Promise<WeatherData> {
  const res = await fetch(buildUrl(), { cache: 'no-store' });
  if (!res.ok) throw new Error(`Open-Meteo ${res.status}`);
  const json = (await res.json()) as any;

  const now = {
    temp: Math.round(json.current.temperature_2m),
    feels: Math.round(json.current.apparent_temperature),
    humidity: Math.round(json.current.relative_humidity_2m),
    wind: Math.round(json.current.wind_speed_10m),
    precipProb: Math.round(json.current.precipitation_probability ?? 0),
    code: json.current.weather_code,
  };

  const days: WeatherDay[] = (json.daily.time as string[]).map((date, i) => ({
    date,
    code: json.daily.weather_code[i],
    tMax: Math.round(json.daily.temperature_2m_max[i]),
    tMin: Math.round(json.daily.temperature_2m_min[i]),
    precipProb: Math.round(json.daily.precipitation_probability_max[i] ?? 0),
    uv: Math.round(json.daily.uv_index_max[i] ?? 0),
    wind: Math.round(json.daily.wind_speed_10m_max[i] ?? 0),
  }));

  return { now, days, fetchedAt: Date.now() };
}

export async function getWeather(): Promise<WeatherData | null> {
  // Workers: use Cache API (edge cache). Node: use in-memory cache.
  try {
    const cache = (globalThis as any).caches?.default;
    if (cache) {
      const hit = await cache.match(CACHE_KEY);
      if (hit) {
        const data = (await hit.json()) as WeatherData;
        if (Date.now() - data.fetchedAt < TTL_SECONDS * 1000) return data;
      }
    }
  } catch {
    /* ignore */
  }

  if (memCache && Date.now() - memCache.ts < TTL_SECONDS * 1000) return memCache.data;

  try {
    const data = await fetchOpenMeteo();
    memCache = { ts: Date.now(), data };
    try {
      const cache = (globalThis as any).caches?.default;
      if (cache) {
        await cache.put(
          CACHE_KEY,
          new Response(JSON.stringify(data), {
            headers: { 'content-type': 'application/json', 'cache-control': `max-age=${TTL_SECONDS}` },
          })
        );
      }
    } catch {
      /* ignore */
    }
    return data;
  } catch {
    return memCache?.data ?? null;
  }
}
