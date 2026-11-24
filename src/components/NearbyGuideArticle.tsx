import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {explorePlaces, exploreSlugs, exploreUi, isNearbyGuide, type ExploreLocale} from '@/lib/explore';
import {exploreDetailUi} from '@/lib/exploreDetails';
import {nearbyGuides, nearbyVisitorInfo, type NearbySlug} from '@/lib/exploreNearby';
import {SITE} from '@/lib/site';

export function NearbyGuideArticle({slug, locale}: {slug: NearbySlug; locale: ExploreLocale}) {
  const guide = nearbyGuides[slug];
  const copy = guide.copy[locale];
  const labels = exploreUi[locale];
  const details = exploreDetailUi[locale];
  const visit = nearbyVisitorInfo(guide, locale);
  const image = `/nearby/${slug}.jpg`;
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(guide.address + ', Malta')}`;
  const caption = [copy.name, guide.photo.artist, guide.photo.license].filter(Boolean).join(' · ');
  const url = `${SITE.baseUrl}/${locale}/explore/${slug}`;
  const facts = [
    [labels.address, guide.address],
    [details.duration, visit.duration],
    [labels.hours, visit.opening],
    [labels.admission, visit.admission],
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: copy.name,
    description: copy.history,
    url,
    image: SITE.baseUrl + image,
    hasMap: map,
    address: {'@type':'PostalAddress', streetAddress:guide.address, addressCountry:'MT'},
  };

  return <>
    <Header />
    <main className="min-h-screen pt-24 pb-16" style={{background:'var(--bg-primary)', color:'var(--text-primary)'}}>
      <article className="max-w-5xl mx-auto px-4 sm:px-6">
        <nav className="text-sm mb-6" aria-label={labels.nearby}>
          <a href={`/${locale}#nearby-explore`} className="underline underline-offset-4">{labels.section}</a> / {copy.name}
        </nav>
        <header className="mb-10">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">{copy.name}</h1>
          <p className="text-lg mt-4" style={{color:'var(--text-secondary)'}}>{copy.tagline}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="rounded-full px-4 py-2 text-sm" style={{background:'var(--bg-secondary)'}}>{visit.type}</span>
            <span className="rounded-full px-4 py-2 text-sm" style={{background:'var(--bg-secondary)'}}>{visit.duration}</span>
            <a className="rounded-full px-4 py-2 text-sm underline underline-offset-4" style={{background:'var(--bg-secondary)'}} href="#opening">{details.opening}</a>
            <a className="rounded-full px-5 py-2 text-sm font-semibold" style={{background:'var(--accent)',color:'#fff'}} href={map}>{labels.map}</a>
          </div>
        </header>
        <figure className="mb-10">
          <Image src={image} alt={copy.name} width={1280} height={800} unoptimized className="w-full rounded-2xl object-cover max-h-[520px]" />
          <figcaption className="text-xs mt-2" style={{color:'var(--text-secondary)'}}>
            {caption} · <a className="underline" href={guide.photo.file}>Wikimedia Commons</a>
          </figcaption>
        </figure>
        <section className="rounded-2xl p-6 sm:p-8 mb-10" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>
          <h2 className="font-display text-3xl font-semibold mb-4">{visit.labels.about}</h2>
          <p className="leading-8">{visit.labels.operator} · <a className="underline" href={guide.source}>{guide.operator}</a></p>
          <p className="leading-8">{visit.opening}</p>
        </section>
        <section id="opening" className="mb-12 scroll-mt-28">
          <h2 className="font-display text-3xl font-semibold mb-5">{labels.facts}</h2>
          <dl className="grid sm:grid-cols-2 gap-4">
            {facts.map(([label, text]) => <div key={label} className="rounded-xl p-5" style={{background:'var(--bg-secondary)'}}>
              <dt className="text-sm mb-2" style={{color:'var(--text-secondary)'}}>{label}</dt>
              <dd className="font-medium">{text}</dd>
            </div>)}
          </dl>
        </section>
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <section>
            <h2 className="font-display text-3xl font-semibold mb-4">{labels.history}</h2>
            <p className="leading-8">{copy.history}</p>
          </section>
          <section>
            <h2 className="font-display text-3xl font-semibold mb-4">{labels.design}</h2>
            <p className="leading-8">{copy.observation}</p>
          </section>
        </div>
        <section className="mb-12">
          <h2 className="font-display text-3xl font-semibold mb-4">{labels.route}</h2>
          <p className="leading-8">{copy.route}</p>
          <a className="inline-block mt-4 underline underline-offset-4" href={map}>{labels.map}</a>
        </section>
        <section className="mb-12">
          <h2 className="font-display text-3xl font-semibold mb-5">{labels.faq}</h2>
          <div className="space-y-3">
            {visit.faq.map(([question, answer]) => <details key={question} className="rounded-xl p-5" style={{background:'var(--bg-secondary)'}}>
              <summary className="font-semibold cursor-pointer">{question}</summary>
              <p className="mt-3 leading-7">{answer}</p>
            </details>)}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="font-display text-3xl font-semibold mb-4">{labels.sources}</h2>
          <a className="underline underline-offset-4" href={guide.source}>{guide.operator}</a>
        </section>
        <section className="mb-12">
          <h2 className="font-display text-3xl font-semibold mb-4">{details.reviews}</h2>
          <a className="underline underline-offset-4" href={map}>{details.reviewsLink}</a>
        </section>
        <aside className="rounded-2xl p-6" style={{background:'var(--bg-secondary)'}}>
          <h2 className="font-display text-2xl mb-4">{labels.section}</h2>
          <div className="flex flex-wrap gap-4">
            {exploreSlugs.filter(other => other !== slug).map(other => {
              const place = isNearbyGuide(other) ? nearbyGuides[other] : explorePlaces[other];
              return <a className="underline underline-offset-4" key={other} href={`/${locale}/explore/${other}`}>{place.copy[locale].name}</a>;
            })}
          </div>
        </aside>
      </article>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </>;
}
