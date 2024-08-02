

import gplay, { app } from 'google-play-scraper';
import { AppCard4, AppCard5 } from './AppCards';


export default async function SideBar({appId , num}) {
  let apps = await gplay.similar({appId})
  apps = apps.slice(0, num);

  return (
    <div>
      {/* Sidebar */}
      <div className="w-full lg:block p-8 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Similar Apps</h2>
        <ul className=' flex flex-col gap-4 overflow-auto '>
          {apps.map((app, index) => (
            <AppCard4 key={index} app={app} />
          ))}
        </ul>
      </div>
    </div>
  );
}
