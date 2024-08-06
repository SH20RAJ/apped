
import DownloadApp from "@/app/(main)/_components/DownloadApp";
import gplay from "google-play-scraper";
export default async function DownloadPage({ params }) {
  const { appSlug, appId } = params;
  let app = await gplay.app({ appId: appId });

  return (
    <div>
      <DownloadApp app={app} appId={appId}  />
    </div>
  );
}
