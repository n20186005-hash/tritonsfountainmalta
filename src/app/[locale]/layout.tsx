import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import PwaRegister from '@/components/PwaRegister';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const baseUrl = SITE.baseUrl;

  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const itUrl = `${baseUrl}/it`;
  const mtUrl = `${baseUrl}/mt`;
  const deUrl = `${baseUrl}/de`;
  const esUrl = `${baseUrl}/es`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'it' ? itUrl : locale === 'mt' ? mtUrl : locale === 'de' ? deUrl : locale === 'es' ? esUrl : enUrl;

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.title,
    description: messages.meta.description,
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
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: SITE.siteName[locale as keyof typeof SITE.siteName] || "Tritons' Fountain",
      locale: locale === 'zh' ? 'zh_CN' : locale === 'it' ? 'it_IT' : locale === 'mt' ? 'mt_MT' : locale === 'de' ? 'de_DE' : locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: SITE.heroImage,
          width: 1200,
          height: 800,
          alt: `${SITE.fullName} in ${SITE.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [SITE.heroImage],
    },
  };
}

function buildJsonLd(locale: string, messages: any) {
  const attraction = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${SITE.baseUrl}/#attraction`,
    name: SITE.fullName,
    alternateName: [SITE.shortName, SITE.fullNameMt, `${SITE.fullName}, ${SITE.city}`],
    description: `Comprehensive visitor guide to ${SITE.fullName} in ${SITE.city}, ${SITE.country}.`,
    url: SITE.baseUrl,
    image: [`${SITE.baseUrl}${SITE.heroImage}`],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.city,
      addressRegion: SITE.stateProvince,
      postalCode: SITE.postalCode,
      addressCountry: SITE.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.latitude,
      longitude: SITE.longitude,
    },
    hasMap: SITE.mapsShareUrl,
    sameAs: [SITE.mapsShareUrl, SITE.govtTourismUrl],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: 5,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const faqItems = (messages?.faq?.items || []) as Array<{ question: string; answer: string }>;
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return [attraction, faqPage];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const jsonLd = buildJsonLd(locale, messages);

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#234830" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {jsonLd.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <PwaRegister />
      </body>
    </html>
  );
}
