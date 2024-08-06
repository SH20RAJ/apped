import gplay from "google-play-scraper";
import { AppCard5 } from './AppCards';

const TopApps = async ({ apps, category, collection = gplay.collection.GROSSING, num = 12, title = "Apps", col }) => {

  if (!apps) {
    apps = await gplay.list({
      category,
      collection,
      num
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className={`${col ? 'flex flex-col gap-4' : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'}`}>
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

export default TopApps;
