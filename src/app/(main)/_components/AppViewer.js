import React from "react";

import gplay from "google-play-scraper";
import SideBar from "./SideBar";
import Link from "next/link";
import { formatViews, readableDate } from "@/lib/func";
import { Download } from "@/lib/svgs";
import SimilarApps from "./SimilarApps";

const AppViewer = async ({ appId }) => {
  let app = await gplay.app({ appId: appId });

  // console.log(app);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        {/* App Header */}

        <div className="container mx-auto p-4 lg:p-8">
          {/* App Header */}
          <div className="flex flex-col lg:flex-row items-center mb-8">
            <img
              loading="lazy"
              src={app.icon || "https://via.placeholder.com/150"}
              alt={app?.title}
              className="w-32 h-32 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900">{app.title}</h1>
              <title>{app.title}</title>
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

        {/* Download Buttons */}
        <div className="flex gap-4 mb-8">
          <a
            href={"https://d.apkpure.net/b/APK/" + appId + "?version=latest"}
            target="_"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Download APK {appId}
          </a>
          <a
            href={app.url}
            target="_"
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Google Play
          </a>
        </div>

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
              <img
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
                <Link href={"/tag/" + tag.id}>
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                  >
                    {tag.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* App Information */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">App Information</h2>
            <ul>
              <li className="mb-1">
                <strong>Downloads:</strong> {parseInt(app.maxInstalls)}
              </li>
              {/* <li className="mb-1">
                <strong>Size:</strong> {appDetails.size}
              </li> */}
              <li className="mb-1">
                <strong>Version:</strong> {app.version}
              </li>
              <li className="mb-1">
                <strong>Updated:</strong> {readableDate(app.updated)}
              </li>
              <hr />
              <div>
                <h1>{app.title}</h1>
                <p>Summary: {app.summary}</p>
                <p>Released: {app.released}</p>
                <p>Recent Changes: {app.recentChanges}</p>
                <p>Installs: {app.installs}</p>
                <p>
                  Score: {app.scoreText} ({app.score})
                </p>
                <p>Ratings: {app.ratings}</p>
                <p>Reviews: {app.reviews}</p>
                <p>Price: {app.priceText}</p>
                <p>Developer: {app.developer}</p>
                <p>Developer Email: {app.developerEmail}</p>
                <p>
                  Developer Website:{" "}
                  <a href={app.developerWebsite}>{app.developerWebsite}</a>
                </p>
                <p>
                  Privacy Policy:{" "}
                  <a href={app.privacyPolicy}>{app.privacyPolicy}</a>
                </p>
                <p>Genre: {app.genre}</p>
                <p>Content Rating: {app.contentRating}</p>
                <p>Ad Supported: {app.adSupported ? "Yes" : "No"}</p>
                <p>App ID: {app.appId}</p>
                <p>
                  URL: <a href={app.url}>{app.url}</a>
                </p>
              </div>
            </ul>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex gap-4 mb-8">
          <a
            href={"https://apis.forn.fun/apped/download.php?id=" + appId}
            target="_"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Download APK {appId}
          </a>
          <a
            href={app.url}
            target="_"
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Google Play
          </a>
        </div>

        <SimilarApps appId={app.appId} />

        {/* <Reviews/> */}
      </div>

      <SideBar appId={app.appId} num={5} />
    </div>
  );
};

export default AppViewer;
