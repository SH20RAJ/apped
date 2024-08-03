

import gplay from 'google-play-scraper';
import PopularApps from './PopularApps';


export default async function SimilarApps({appId , num}) {
  let apps = await gplay.similar({appId})
  apps = apps.slice(0, num);

  return (
    <PopularApps apps={apps} />
  );
}
