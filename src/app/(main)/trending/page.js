
import PopularApps from '../_components/PopularApps'
import gplay from 'google-play-scraper'
export default async function page() {
  let apps = await gplay.list({
    num: 200,
    collection: gplay.collection.GROSSING,
  });
  let apps2 = await gplay.list({
    num: 200,
    collection: gplay.collection.TOP_PAID,
  });

  return (
    <div>
      <PopularApps  apps={apps} title='Grossing' />
      <PopularApps  apps={apps2} title='Top Paid' />
    </div>
  )
}
