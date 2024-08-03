
import PopularApps from '../_components/PopularApps'
import gplay from 'google-play-scraper'
export default async function page() {
  let apps = await gplay.list({
    num: 200,
    category: gplay.category.GAME
  });

  return (
    <div>
      <PopularApps  apps={apps} title='Games' />
    </div>
  )
}
