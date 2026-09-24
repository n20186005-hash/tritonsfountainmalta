import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://tritonsfountainmalta.com';
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const itUrl = `${baseUrl}/it/cookie-settings`;
  const mtUrl = `${baseUrl}/mt/cookie-settings`;
  const deUrl = `${baseUrl}/de/cookie-settings`;
  const esUrl = `${baseUrl}/es/cookie-settings`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'it' ? itUrl : locale === 'mt' ? mtUrl : locale === 'de' ? deUrl : locale === 'es' ? esUrl : enUrl;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'it': itUrl,
        'mt': mtUrl,
        'de': deUrl,
        'es': esUrl,
        'x-default': enUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
