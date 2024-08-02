import gplay, { app } from "google-play-scraper";

import { AppCard1 , AppCard2, AppCard4, AppCard5 } from './AppCards';


const PopularApps = async ({apps ,  category , collection , num = 12 , title  = " Apps"}) => {

  if(!apps){
    apps = await gplay.list({
      category,
      collection,
      num
    });
  }


  // console.log(apps);


  return (
    <div className="container mx-auto px-4 py-8">
      {/* Action Games Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {
            apps.map((app, index) => (
              <AppCard5 key={index} app={app} />
            ))
          }
        </div>
      </div>
      </div>

      
  );
};



export default PopularApps;