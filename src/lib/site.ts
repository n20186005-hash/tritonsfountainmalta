// Centralized SEO entity binding for Tritons' Fountain (tritonsfountainmalta.com).
// All structured-data, TDK, and semantic copy draw from these constants so the
// site name, coordinates and official references stay consistent across locales.

export const SITE = {
  domain: 'tritonsfountainmalta.com',
  baseUrl: 'https://tritonsfountainmalta.com',

  // Entity names
  fullName: "Tritons' Fountain",
  fullNameMt: 'Il-Funtana tat-Tritoni',
  shortName: 'Tritons Fountain', // the meaning encoded in the domain (tritonsfountain)

  // Location hierarchy
  city: 'Floriana',
  cityLocal: 'Il-Furjana (Floriana)',
  stateProvince: 'Malta',
  country: 'Malta',
  countryCode: 'MT',
  postalCode: 'FRN 1154',
  streetAddress: 'Vjal Nelson',
  plusCode: 'VGW5+783',
  fullAddress: 'VGW5+783, Vjal Nelson, Il-Furjana, Malta',

  // Coordinates (Tritons' Fountain, Floriana)
  latitude: 35.8967,
  longitude: 14.5126,

  // Maps
  mapsShareUrl: 'https://maps.app.goo.gl/Fm5kTdRDa9nBYwtY6',
  mapsEmbedSrc: "https://maps.google.com/maps?q=Tritons'+Fountain,+Malta&output=embed",

  // Nearby landmarks (semantic cluster)
  nearbyLandmark1: 'Valletta City Gate',
  nearbyLandmark2: "St. John's Co-Cathedral",

  // Official references
  govtTourismUrl: 'https://www.visitmalta.com/en/',
  govtTourismLabel: 'Visit Malta (Official Tourism Board)',

  // Ratings (synced with Google Maps, 2026)
  rating: 4.7,
  reviewCount: 28583,

  // SEO site name: "Attraction Name + City + Travel Guide" per locale
  siteName: {
    en: "Tritons' Fountain Floriana - Visitor Guide",
    zh: "海神喷泉 弗洛里亚纳 — 游客指南",
    it: "Fontana dei Tritoni Floriana - Guida",
    mt: "Il-Funtana tat-Tritoni Floriana - Gwida",
    de: "Tritons’ Fountain Floriana - Besucherführer",
    es: "Tritons’ Fountain Floriana - Guía de visita",
  },

  // Images
  heroImage: '/images/hero.jpg',
  icon192: '/icon-192.png',
  icon512: '/icon-512.png',
  iconMaskable: '/icon-512-maskable.png',
} as const;

export type SiteConfig = typeof SITE;
