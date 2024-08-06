import { slugify } from "@/lib/func";
import { Download } from "@/lib/svgs";

export const DownloadButtons = ({ app, appId }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-8">
      <a
        href={"/" + slugify(app.title) + "/" + appId + "/download"}
        target="_blank"
        rel="noreferrer noopener"
        className="flex-1 bg-blue-500 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2"
      >
        <Download />
        <span>Download</span>
      </a>
      <a
        href={`https://play.google.com/store/apps/details?id=${appId}`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 bg-gray-200 text-gray-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>

        <span>View on Play Store</span>
      </a>
    </div>
  );
};

export const DownloadButtons2 = ({ app, appId }) => {
  return (
    <>
      <div className="flex gap-4 mb-8">
        <a
          href={"/" + app.title + appId + "/download"}
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
          Get on Play{" "}
          <img
            src={"/googleplay.svg"}
            className=" inline w-[20px] m-1 shadow-sm "
          />
        </a>
      </div>
    </>
  );
};
