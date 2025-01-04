import gplay from "google-play-scraper";
import Image from 'next/image';

const TopApps = async ({ 
  apps, 
  category, 
  collection = gplay.collection.TOP_FREE, 
  num = 12, 
  title = "Apps",
  showRating = false,
  showDeveloper = false
}) => {
  if (!apps) {
    apps = await gplay.list({
      category,
      collection,
      num
    });
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            <a href={`/category/${category}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            {apps.map((app, index) => (
              <a 
                key={index} 
                href={`/app/${app.appId}`}
                className="group bg-white rounded-lg p-3 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="relative w-full aspect-square mb-3 rounded-2xl overflow-hidden">
                  <Image
                    src={app.icon}
                    alt={app.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                  {app.title}
                </h3>
                {showDeveloper && (
                  <p className="text-xs text-gray-500 mb-1">
                    {app.developer}
                  </p>
                )}
                {showRating && (
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-xs text-gray-600">{app.score.toFixed(1)}</span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopApps;
