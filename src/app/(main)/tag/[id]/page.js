import gplay from "google-play-scraper";
import PopularApps from "../../_components/PopularApps";

export default async function page({ params }) {
  let { id } = params;
  id = id.toUpperCase();
  let apps = await gplay.list({
    category: gplay.category[id],
    num: 200,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">{id.replace(/_/g, ' ')}</h1>

      <PopularApps apps={apps} />
    </div>
  );
}
