import gplay from "google-play-scraper";
import SideBar from "./SideBar";
import Link from "next/link";
import { formatViews, readableDate } from "@/lib/func";
import { Download } from "@/lib/svgs";
import SimilarApps from "./SimilarApps";
import { DownloadButtons } from "./ViewerComponents";
import Img from "@/lib/Img";
import { redirect } from "next/navigation";

const AppViewer = async ({ appId, app, download }) => {
  // let app = await gplay.app({ appId: appId });
  // 
  // if(download) redirect(app.url);
  // console.log(app);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        {/* App Header */}

        <AppHeader app={app} />

        <div className="flex flex-wrap gap-2 mb-4">
          {app.categories.map((tag, index) => (
            <Link href={"/tag/" + tag?.id?.toLowerCase()} key={index}>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {tag.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Download Buttons */}
        <DownloadButtons app={app} appId={appId} />

        <div className="my-8">
          {app.video && (
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-4">
              <iframe
                className="w-full h-68 lg:h-80"
                src={app.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="text-gray-800">{app.summary}</div>
        </div>

        {/* Screenshots */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="flex overflow-x-scroll space-x-4 pb-4">
            {app.screenshots.map((image, index) => (
              <Img
                mode="cloudinary"
                format={"webp"}
                height={400}
                loading="lazy"
                key={index}
                src={image}
                alt={`Screenshot ${index + 1}`}
                className="w-64 h-80 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* App Details */}
        <div className="flex flex-col gap-8 mb-8">
          {/* Description and Tags */}

          <div>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p
              className="text-gray-700 mb-4 article"
              dangerouslySetInnerHTML={{ __html: app.descriptionHTML }}
            ></p>
            <div className="flex flex-wrap gap-2 mb-4">
              {app.categories.map((tag, index) => (
                <Link href={"/tag/" + tag?.id?.toLowerCase()} key={index}>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {tag.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* App Information */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">App Information</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="w-full border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Property
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Downloads</td>
                    <td className="py-3 px-4 border-b">
                      {parseInt(app.maxInstalls)}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Version</td>
                    <td className="py-3 px-4 border-b">{app.version}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Updated</td>
                    <td className="py-3 px-4 border-b">
                      {readableDate(app.updated)}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Title</td>
                    <td className="py-3 px-4 border-b">{app.title}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Summary</td>
                    <td className="py-3 px-4 border-b">{app.summary}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Released</td>
                    <td className="py-3 px-4 border-b">{app.released}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Recent Changes</td>
                    <td className="py-3 px-4 border-b">{app.recentChanges}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Installs</td>
                    <td className="py-3 px-4 border-b">{app.installs}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Score</td>
                    <td className="py-3 px-4 border-b">
                      {app.scoreText} ({app.score})
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Ratings</td>
                    <td className="py-3 px-4 border-b">{app.ratings}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Reviews</td>
                    <td className="py-3 px-4 border-b">{app.reviews}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Price</td>
                    <td className="py-3 px-4 border-b">{app.priceText}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Developer</td>
                    <td className="py-3 px-4 border-b">{app.developer}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Developer Email</td>
                    <td className="py-3 px-4 border-b">{app.developerEmail}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Developer Website</td>
                    <td className="py-3 px-4 border-b">
                      <a
                        href={app.developerWebsite}
                        className="text-blue-500 hover:underline"
                      >
                        {app.developerWebsite}
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Privacy Policy</td>
                    <td className="py-3 px-4 border-b">
                      <a
                        href={app.privacyPolicy}
                        className="text-blue-500 hover:underline"
                      >
                        {app.privacyPolicy}
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Genre</td>
                    <td className="py-3 px-4 border-b">{app.genre}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Content Rating</td>
                    <td className="py-3 px-4 border-b">{app.contentRating}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">Ad Supported</td>
                    <td className="py-3 px-4 border-b">
                      {app.adSupported ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">App ID</td>
                    <td className="py-3 px-4 border-b">{app.appId}</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">URL</td>
                    <td className="py-3 px-4 border-b">
                      <a
                        href={app.url}
                        className="text-blue-500 hover:underline"
                      >
                        {app.url}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <DownloadButtons app={app} appId={appId} />

        {/* Similar Apps */}

        <SimilarApps appId={app.appId} />

        {/* <Reviews/> */}
      </div>

      <SideBar appId={app.appId} num={5} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { appId } = params;
  let app = await gplay.app({ appId: appId });
  return {
    props: { appId, app },
  };
}
// export const config = { amp: true };

export default AppViewer;

export const AppHeader2 = ({ app }) => {
  return (
    <div className="flex gap-4 mb-8">
      <Img
        loading="lazy"
        mode="cloudinary"
        src={app.icon}
        alt={app.title}
        className="w-24 h-24 rounded-lg shadow-md"
      />
      <div>
        <h1 className="text-3xl font-bold">{app.title}</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <span>{app.developer}</span>
          <span className="text-xs">
            {formatViews(app.minInstalls)} - {formatViews(app.maxInstalls)}
          </span>
        </div>
      </div>
    </div>
  );
};

export const AppHeader = ({ app }) => {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      {/* App Header */}
      <div className="flex flex-col lg:flex-row items-center mb-8">
        <Img
          mode="cloudinary"
          loading="lazy"
          src={app.icon || "https://via.placeholder.com/150"}
          alt={app?.title}
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
        <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-900">{app.title}</h1>
          {/* <title>{app.title}</title> */}
          <p className="text-gray-600">{app.developer}</p>
          <p className="text-yellow-500 mt-1">⭐ {app.scoreText}</p>
          <div className="flex flex-wrap justify-center lg:justify-start mt-2 space-x-2 text-sm">
            <span className="text-teal-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 15V5l7 5-7 5z" />
              </svg>
              {app.contentRating}
            </span>
            <span>•</span>
            <span className="text-purple-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z" />
              </svg>
              {app.priceText}
            </span>
            <span>•</span>
            <span className="text-blue-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a8 8 0 110-16 8 8 0 010 16zm1-10V7H9v3H7v2h2v3h2v-3h2v-2h-2z" />
              </svg>
              {formatViews(app.maxInstalls)} <Download />
            </span>
            <span>•</span>
            <span className="text-green-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0L13.17 7.04a1 1 0 00.95.69h4.513c.969 0 1.371 1.24.588 1.81l-3.642 2.727a1 1 0 00-.363 1.118l1.4 4.292c.33.956-.755 1.749-1.541 1.182L10 15.401l-3.874 2.758c-.786.567-1.872-.226-1.542-1.182l1.4-4.292a1 1 0 00-.363-1.118L2.979 9.54c-.783-.57-.38-1.81.588-1.81h4.513a1 1 0 00.95-.69l1.019-3.113z" />
              </svg>
              {formatViews(app.ratings)}
            </span>
            <span>•</span>
            <span className="text-red-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-7H9v2h2v-2zM9 7h2v4H9V7z" />
              </svg>
              {formatViews(app.reviews)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
