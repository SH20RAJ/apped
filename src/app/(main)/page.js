import dynamic from 'next/dynamic';
import HeroSection from './_components/HeroSection';
import TopApps from './_components/TopApps';
import AppCrousel from './_components/AppCrousel';
import gplay from 'google-play-scraper';

// Dynamic import for the PopularApps component with loading fallback
const PopularApps = dynamic(() => import('./_components/PopularApps'), {
  loading: () => <div>Loading Popular Apps...</div>,
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* <AppCrousel /> */}
      <HeroSection />

      {/* <Apps /> */}
      <div id="topapps" className="mb-20"></div>
      <TopApps title="Top Apps" />

      {/* Dynamically-loaded PopularApps components */}
      <PopularApps
        category={gplay.category.ANDROID_WEAR}
        title="Android Wear"
      />
      <PopularApps
        category={gplay.category.APPLICATION}
        title="Application"
        num="24"
      />
      <PopularApps
        category={gplay.category.COMMUNICATION}
        title="Communication"
        num="24"
      />
      <PopularApps
        category={gplay.category.EDUCATION}
        title="Education"

      />
    </>
  );
}
