

import gplay from "google-play-scraper";
import PopularApps from "../../_components/PopularApps";


export const runtime = 'edge';
export default async function page({ params }) {
  let { id } = params;
  id = id.toUpperCase();
  let apps = await gplay.list({
    category: gplay.category[id],
    num: 200,
  });


  return (
    <div>
      <title>{id} Tag - Apped</title>
      <PopularApps apps={apps} />
    </div>
  );
}
