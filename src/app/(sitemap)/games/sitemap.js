import gplay from "google-play-scraper";
export const runtime = 'edge';
export default async function sitemap() {
  let sitemap = [];

  let apps = await gplay.list({
    category: gplay.category.APPLICATION,
    num: 250,
  });

  apps.concat(
    await gplay.list({
      category: gplay.category.LIBRARIES_AND_DEMO,
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
      collection: gplay.collection.TOP_FREE,
      category: gplay.category.EDUCATION,
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
