import HeroSection from './_components/HeroSection';
import TopApps from './_components/TopApps';
import PopularApps from './_components/PopularApps';
import gplay from 'google-play-scraper';

export default function Home() {
  return (
    <>
      {/* <AppCrousel /> */}
      <HeroSection />

      {/* <Apps /> */}
      <div id="topapps" className="mb-20"></div>
      <TopApps title="Top Apps" />

      {/* Statically-loaded PopularApps components */}
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
