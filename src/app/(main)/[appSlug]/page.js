import Image from 'next/image';
import gplay from 'google-play-scraper';

async function getAppDetails(appId) {
  try {
    return await gplay.app({ appId });
  } catch (error) {
    console.error('Error fetching app details:', error);
    return null;
  }
}

async function getSimilarApps(appId) {
  try {
    return await gplay.similar({ appId, num: 6 });
  } catch (error) {
    console.error('Error fetching similar apps:', error);
    return [];
  }
}

export default async function AppPage({ params }) {
  const appId = params.appSlug;
  const app = await getAppDetails(appId);
  const similarApps = await getSimilarApps(appId);

  if (!app) {
    return <div>App not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* App Icon and Basic Info */}
            <div className="flex-shrink-0 flex items-start">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={app.icon}
                  alt={app.title}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* App Details */}
            <div className="flex-grow">
              <h1 className="text-2xl font-bold mb-2">{app.title}</h1>
              <p className="text-sm text-gray-600 mb-3">{app.developer}</p>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {app.genre}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Free
                </span>
                {app.contentRating && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {app.contentRating}
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="font-medium">{app.score.toFixed(1)}</span>
                  <span className="text-gray-500 ml-1">({app.ratings.toLocaleString()})</span>
                </div>
                <div className="text-gray-500">
                  {app.installs.toLocaleString()} downloads
                </div>
                <div className="text-gray-500">
                  Updated: {new Date(app.updated).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex-shrink-0 flex flex-col gap-3">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Download APK
              </button>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium text-center transition-colors"
              >
                View on Play Store
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Screenshots</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4">
            {app.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative w-60 h-[400px] rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={screenshot}
                  alt={`${app.title} screenshot ${index + 1}`}
                  width={240}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 whitespace-pre-line">{app.description}</p>
        </div>
      </div>

      {/* Similar Apps Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Similar Apps</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {similarApps.map((similarApp, index) => (
            <a
              key={index}
              href={`/app/${similarApp.appId}`}
              className="group bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative w-full aspect-square mb-3 rounded-xl overflow-hidden">
                <Image
                  src={similarApp.icon}
                  alt={similarApp.title}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                {similarApp.title}
              </h3>
              <p className="text-xs text-gray-500 mb-1">{similarApp.developer}</p>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-xs text-gray-600">
                  {similarApp.score.toFixed(1)}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
