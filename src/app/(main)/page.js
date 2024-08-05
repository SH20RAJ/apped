
import React, { lazy, Suspense } from "react";
import HeroSection from "./_components/HeroSection";
import TopApps from "./_components/TopApps";
import AppCrousel from "./_components/AppCrousel";
import gplay from "google-play-scraper";

// Lazy load the PopularApps component
const PopularApps = lazy(() => import("./_components/PopularApps"));

export default function Home() {
  return (
    <>
      <AppCrousel />
      <HeroSection />

      {/* <Apps /> */}
      <div id="topapps" className="mb-20"></div>
      <TopApps title="Top Apps" />

      {/* Lazy-loaded PopularApps components */}
      <PopularApps
        category={gplay.category.ANDROID_WEAR}
        title="Android Wear"
        num="24"
      />
      <Suspense fallback={<div>Loading Popular Apps...</div>}>
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
          num="24"
        />
      </Suspense>
    </>
  );
}
