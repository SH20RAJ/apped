import gplay from "google-play-scraper";
export const runtime = "edge";

export default async function sitemap() {
  let sitemap = [];

  let apps = await gplay.list({
    category: gplay.category.MUSIC_AND_AUDIO,
  });

  apps.concat(
    await gplay.list({
      category: gplay.category.GAME_SPORTS,
      collection: gplay.collection.TOP_FREE,
    })
  );
  apps.concat(
    await gplay.list({
      collection: gplay.collection.TOP_PAID,
    })
  );
  apps.concat(
    await gplay.list({
      collection: gplay.collection.TOP_GROSSING,
    })
  );
  apps.concat(
    await gplay.list({
      collection: gplay.collection.TOP_FREE,
      num: 500,
    })
  );

  apps.forEach((app) => {
    sitemap.push({
      url: `https://apped.me/app/${app.appId}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    });
  });

  return sitemap;
}
