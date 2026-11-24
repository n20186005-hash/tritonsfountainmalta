import {getLocale} from 'next-intl/server';
import Image from 'next/image';
import {nearbyGuides} from '@/lib/exploreNearby';
import {explorePlaces, exploreSlugs, exploreUi, isNearbyGuide, type ExploreLocale} from '@/lib/explore';

export default async function NearbyExplore() {
  const locale = (await getLocale()) as ExploreLocale;
  const t = exploreUi[locale] || exploreUi.en;
  return <section id="nearby-explore" className="section-padding" style={{background:'var(--bg-secondary)'}}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{color:'var(--text-primary)'}}>{t.section}</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {exploreSlugs.map(slug => {
          const place = isNearbyGuide(slug) ? nearbyGuides[slug] : explorePlaces[slug];
          const copy = place.copy[locale];
          const image = 'image' in place ? place.image : `/nearby/${slug}.jpg`;
          return <a key={slug} href={`/${locale}/explore/${slug}`} className="block overflow-hidden rounded-2xl group" style={{background:'var(--bg-primary)', border:'1px solid var(--border-color)'}}>
            <Image src={image} alt={copy.name} width={640} height={420} unoptimized className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform" />
            <div className="p-6"><h3 className="font-display text-xl font-semibold" style={{color:'var(--text-primary)'}}>{copy.name}</h3><p className="mt-2 text-sm leading-6" style={{color:'var(--text-secondary)'}}>{copy.tagline}</p></div>
          </a>;
        })}
      </div>
    </div>
  </section>;
}
