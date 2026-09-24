import { getLocale, getTranslations } from 'next-intl/server';
import { getWeather, weatherText, isPrecipitation } from '@/lib/weather';

const INTL_LOCALE: Record<string, string> = {
  en: 'en-GB',
  zh: 'zh-CN',
  it: 'it-IT',
  mt: 'mt-MT',
  de: 'de-DE',
  es: 'es-ES',
};

function uvLevel(uv: number, t: (k: string) => string): string {
  if (uv >= 8) return t('uvVeryHigh');
  if (uv >= 6) return t('uvHigh');
  if (uv >= 3) return t('uvModerate');
  return t('uvLow');
}

export default async function WeatherSection() {
  const t = await getTranslations('weather');
  const locale = await getLocale();
  const data = await getWeather();

  if (!data) return null; // graceful: weather is an enhancement, never blocks content

  const intlLocale = INTL_LOCALE[locale] || 'en-GB';
  const { now, days } = data;

  const willRain = isPrecipitation(now.code) || now.precipProb >= 40 || days[0].precipProb >= 40;
  const outfit =
    now.feels < 15 ? t('outfitCold') : now.feels <= 22 ? t('outfitCool') : t('outfitWarm');
  const plan = willRain ? t('planRain') : t('planSun');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {/* Current conditions */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-6 flex flex-col sm:flex-row items-center gap-6"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <div className="text-center sm:text-left">
            <div className="text-5xl font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
              {now.temp}°C
            </div>
            <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
              {weatherText(now.code, locale)}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <Metric label={t('feelsLike')} value={`${now.feels}°C`} />
            <Metric label={t('humidity')} value={`${now.humidity}%`} />
            <Metric label={t('wind')} value={`${now.wind} km/h`} />
            <Metric label={t('precip')} value={`${now.precipProb}%`} />
          </div>
        </div>

        {/* Travel advice (derived, neutral) */}
        <div
          className="rounded-xl p-5 mb-8 flex items-start gap-3"
          style={{ background: willRain ? 'rgba(58,122,141,0.10)' : 'rgba(45,90,61,0.10)', border: '1px solid var(--border-color)' }}
        >
          <span className="text-2xl" aria-hidden="true">{willRain ? '☔' : '🌤️'}</span>
          <div>
            <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
              {willRain ? t('umbrellaYes') : t('umbrellaNo')}
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{outfit}</p>
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{plan}</p>
          </div>
        </div>

        {/* 7-day forecast */}
        <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('sevenDay')}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
          {days.slice(0, 7).map((d) => {
            const dayName = new Intl.DateTimeFormat(intlLocale, { weekday: 'short' }).format(
              new Date(`${d.date}T12:00:00`)
            );
            return (
              <div
                key={d.date}
                className="rounded-xl p-3 text-center"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
              >
                <div className="text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>{dayName}</div>
                <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{weatherText(d.code, locale)}</div>
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {d.tMax}° <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{d.tMin}°</span>
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--accent)' }}>{t('precipShort')} {d.precipProb}%</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  UV {d.uv} · {uvLevel(d.uv, t)}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>{t('updated')}</p>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{value}</div>
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}
