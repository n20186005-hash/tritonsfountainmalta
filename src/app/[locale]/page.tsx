import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import HotelsSection from '@/components/HotelsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import EntityOverview from '@/components/EntityOverview';
import FaqSection from '@/components/FaqSection';
import SourcesSection from '@/components/SourcesSection';
import WeatherSection from '@/components/WeatherSection';
import SeasonalSection from '@/components/SeasonalSection';
import ItinerariesSection from '@/components/ItinerariesSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ResponsibilitySection from '@/components/ResponsibilitySection';
import TransportGuideSection from '@/components/TransportGuideSection';
import StoriesSection from '@/components/StoriesSection';
import Footer from '@/components/Footer';

// Render per-request so the weather module always shows fresh conditions.
export const dynamic = 'force-dynamic';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <EntityOverview />
        <BasicInfo />
        <HoursSection />
        <WeatherSection />
        <TicketsSection />
        <TransportSection />
        <TransportGuideSection />
        <InfoSection />
        <StoriesSection />
        <ResponsibilitySection />
        <SeasonalSection />
        <RouteSection />
        <ItinerariesSection />
        <PhotoSpotsSection />
        <Gallery />
        <HotelsSection />
        <FacilitiesSection />
        <Reviews />
        <MapEmbed />
        <FaqSection />
        <SourcesSection />
      </main>
      <Footer />
    </>
  );
}
