import gplay from "google-play-scraper";
import PopularApps from "../_components/PopularApps";

export default async function page({ params }) {
  const { appSlug } = params;
  // console.log(appSlug);

  let apps = await gplay
    .developer({ devId: appSlug || "DxCo Games" })
    // .then(console.log);

  return (
    <div>
      <PopularApps apps={apps} />
    </div>
  );
}
