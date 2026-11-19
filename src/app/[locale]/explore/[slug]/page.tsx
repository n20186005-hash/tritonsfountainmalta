import type {Metadata} from 'next';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {explorePlaces, exploreSlugs, exploreUi, type ExploreLocale, type ExploreSlug} from '@/lib/explore';
import {routing} from '@/i18n/routing';
import {SITE} from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Params = Promise<{locale: string; slug: string}>;

export function generateStaticParams() {
  return routing.locales.flatMap(locale => exploreSlugs.map(slug => ({locale, slug})));
}

function resolve(locale: string, slug: string) {
  if (!routing.locales.includes(locale as ExploreLocale) || !exploreSlugs.includes(slug as ExploreSlug)) notFound();
  return {locale: locale as ExploreLocale, slug: slug as ExploreSlug};
}

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
  const value = await params;
  const {locale, slug} = resolve(value.locale, value.slug);
  const place = explorePlaces[slug];
  const copy = place.copy[locale];
  const url = `${SITE.baseUrl}/${locale}/explore/${slug}`;
  return {
    title: `${copy.name} | ${SITE.fullName} Guide`,
    description: copy.intro.slice(0, 165),
    alternates: {
      canonical: url,
      languages: Object.fromEntries([...routing.locales.map(l => [l, `${SITE.baseUrl}/${l}/explore/${slug}`]), ['x-default', `${SITE.baseUrl}/en/explore/${slug}`]]),
    },
    openGraph: {title: copy.name, description: copy.tagline, url, images: [place.image]},
  };
}

export default async function ExplorePage({params}: {params: Params}) {
  const value = await params;
  const {locale, slug} = resolve(value.locale, value.slug);
  const place = explorePlaces[slug];
  const c = place.copy[locale];
  const t = exploreUi[locale];
  const map = place.map;
  const articleUrl = `${SITE.baseUrl}/${locale}/explore/${slug}`;
  const jsonLd = slug === 'valletta-city-gate' ? {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: c.name, description: c.intro, url: articleUrl,
    image: `${SITE.baseUrl}${place.image}`, hasMap: map,
    address: {'@type': 'PostalAddress', streetAddress: place.address, addressCountry: 'MT'},
    isAccessibleForFree: place.free,
  } : {
    '@context': 'https://schema.org', '@type': 'Article', headline: c.name,
    description: c.intro, mainEntityOfPage: articleUrl,
    image: `${SITE.baseUrl}${place.image}`, about: {'@type': 'TouristAttraction', name: SITE.fullName, hasMap: map},
  };
  return <>
    <Header />
    <main className="min-h-screen pt-24 pb-16" style={{background: 'var(--bg-primary)', color: 'var(--text-primary)'}}>
      <article className="max-w-5xl mx-auto px-4 sm:px-6">
        <nav className="text-sm mb-6" aria-label="Breadcrumb"><a href={`/${locale}`} className="underline underline-offset-4">{t.back}</a> / {c.name}</nav>
        <header className="mb-10">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{color:'var(--accent)'}}>{t.nearby}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">{c.name}</h1>
          <p className="text-lg mt-4" style={{color:'var(--text-secondary)'}}>{c.tagline}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="rounded-full px-4 py-2 text-sm" style={{background:'var(--bg-secondary)'}}>{t.free}</span>
            <a href={map} target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-2 text-sm font-semibold" style={{background:'var(--accent)', color:'#fff'}}>{t.map} ↗</a>
          </div>
        </header>
        <figure className="mb-10">
          <Image src={place.image} alt={c.name} width={1280} height={800} unoptimized className="w-full rounded-2xl object-cover max-h-[520px]" />
          <figcaption className="text-xs mt-2" style={{color:'var(--text-secondary)'}}>{slug === 'valletta-city-gate' ? 'Valletta City Gate · Wikimedia Commons' : 'Tritons’ Fountain · site gallery'}</figcaption>
        </figure>
        <section className="mb-10"><h2 className="font-display text-3xl font-semibold mb-4">{t.about}</h2><p className="leading-8">{c.intro}</p></section>
        <section className="rounded-2xl p-6 sm:p-8 mb-10" style={{background:'var(--bg-secondary)', border:'1px solid var(--border-color)'}}>
          <h2 className="font-display text-3xl font-semibold mb-4">{c.aboutTitle}</h2><p className="leading-8">{c.about}</p>
        </section>
        <section className="mb-12"><h2 className="font-display text-3xl font-semibold mb-5">{t.facts}</h2>
          <dl className="grid sm:grid-cols-2 gap-4">
            {[[t.address,place.address],[t.hours,t.access],[t.admission,t.free],[t.transport,t.check]].map(([label,txt]) =>
              <div key={label} className="rounded-xl p-5" style={{background:'var(--bg-secondary)'}}><dt className="text-sm mb-2" style={{color:'var(--text-secondary)'}}>{label}</dt><dd className="font-medium">{txt}</dd></div>)}
          </dl>
          <a className="inline-block mt-5 underline underline-offset-4" href={map} target="_blank" rel="noopener noreferrer">{t.map} ↗</a>
        </section>
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <section><h2 className="font-display text-3xl font-semibold mb-4">{t.history}</h2><p className="leading-8">{c.history}</p></section>
          <section><h2 className="font-display text-3xl font-semibold mb-4">{t.design}</h2><p className="leading-8">{c.design}</p></section>
        </div>
        <section className="mb-12"><h2 className="font-display text-3xl font-semibold mb-5">{t.highlights}</h2><ul className="grid sm:grid-cols-2 gap-3">{c.highlights.map(item => <li className="rounded-xl p-5" style={{background:'var(--bg-secondary)'}} key={item}>{item}</li>)}</ul></section>
        <section className="mb-12"><h2 className="font-display text-3xl font-semibold mb-5">{t.tips}</h2><ul className="list-disc pl-6 space-y-3 leading-8">{c.tips.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section className="mb-12"><h2 className="font-display text-3xl font-semibold mb-5">{t.route}</h2><ol className="space-y-4">{c.route.map((item,i) => <li key={item} className="flex gap-4"><span className="shrink-0 rounded-full w-9 h-9 flex items-center justify-center" style={{background:'var(--accent)',color:'#fff'}}>{i+1}</span><p className="leading-8">{item}</p></li>)}</ol></section>
        <section className="mb-12"><h2 className="font-display text-3xl font-semibold mb-5">{t.photos}</h2><div className="grid sm:grid-cols-2 gap-4 mb-5">{place.extraImages.map(src => <Image key={src} src={src} alt={`${c.name} — ${t.photos}`} width={640} height={420} unoptimized className="rounded-xl object-cover w-full h-64" />)}</div><ul className="list-disc pl-6 space-y-3">{c.photoTips.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section className="mb-12"><h2 className="font-display text-3xl font-semibold mb-5">{t.faq}</h2><div className="space-y-3">{c.faq.map(([q,a]) => <details key={q} className="rounded-xl p-5" style={{background:'var(--bg-secondary)'}}><summary className="font-semibold cursor-pointer">{q}</summary><p className="mt-3 leading-7">{a}</p></details>)}</div></section>
        <section className="mb-12"><h2 className="font-display text-3xl font-semibold mb-4">{t.sources}</h2><ul className="list-disc pl-6 space-y-2"><li><a className="underline" href={place.factSource} target="_blank" rel="noopener noreferrer">Visit Malta</a></li><li><a className="underline" href={place.operatorSource} target="_blank" rel="noopener noreferrer">{slug === 'valletta-city-gate' ? 'Visit Malta — Valletta' : 'Public Works Department — maintenance procurement'}</a></li></ul></section>
        <aside className="rounded-2xl p-6" style={{background:'var(--bg-secondary)'}}><h2 className="font-display text-2xl mb-4">{t.section}</h2><div className="flex flex-wrap gap-4">{exploreSlugs.filter(other => other !== slug).map(other => <a className="underline underline-offset-4" key={other} href={`/${locale}/explore/${other}`}>{explorePlaces[other].copy[locale].name}</a>)}<a className="underline underline-offset-4" href={`/${locale}`}>{t.back}</a></div></aside>
      </article>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
  </>;
}
