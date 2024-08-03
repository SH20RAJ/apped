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
    openGraph: {
      title: app.title,
      description: app.summary,
      image: app.headerImage || app.icon,
      images: [...app.screenshots, app.icon],
      url: `https://www.apped.me/${appSlug}/${appId}`,
    },
  };
}

export default async function AppPage({ params }) {
  const { appSlug, appId } = params;
  let app = await gplay.app({ appId: appId });
  console.log(app);
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    name: app.title,
    description: app.summary,
    applicationCategory: "Game",
    operatingSystem: "Android",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: app.score,
      ratingCount: app.reviews,
    },
    offers: {
      "@type": "Offer",
      price: app.price,
      priceCurrency: app.currency,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: app.score,
        bestRating: 5,
        worstRating: 1,
      },
    },
  };
  return (
    <div>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <AppViewer app={app} appId={appId} />
    </div>
  );
}
