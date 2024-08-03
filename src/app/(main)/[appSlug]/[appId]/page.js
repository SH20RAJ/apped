import React from "react";
import AppViewer from "../../_components/AppViewer";
import gplay from "google-play-scraper";
// set meta tags
export async function generateMetadata({ params }) {
  const { appSlug, appId } = params;
  let app = await gplay.app({ appId: appId });

  return {
    title: app.title,
    description: app.summary,
    image: app.icon,
    url: `https://www.apped.me/${appSlug}/${appId}`,
    //og and twitter
    
  };
}

export default function AppPage({ params }) {
  const { appSlug, appId } = params;
  return (
    <div>
      <AppViewer appId={appId} />
    </div>
  );
}
