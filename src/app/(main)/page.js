import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Apps from "./_components/Apps";
import PopularApps from "./_components/PopularApps";
import gplay, { app } from "google-play-scraper";


export default function Home() {
  return (
    <>

      <HeroSection />

      {/* <Apps /> */}
      <PopularApps category={gplay.category.ANDROID_WEAR} title="Android Wear" num="24"  />
      <PopularApps category={gplay.category.APPLICATION} title="Application" num="24"  />
      <PopularApps category={gplay.category.COMMUNICATION} title="Communication" num="24"  />
      <PopularApps category={gplay.category.EDUCATION} title="Education" num="24"  />

      
    </>
  );
}
