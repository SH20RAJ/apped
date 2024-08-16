import gplay from "google-play-scraper";
import {
  AppCard1,
  AppCard2,
  AppCard3,
  AppCard4,
  AppCard5,
} from "../_components/AppCards";

export default async function page(req) {
  let search = req.searchParams.q;
  let page = req.searchParams.page || 1;

  let apps = await gplay.search({
    term: search || "panda",
    num: 250,
    page: page,
  });

  return (
    <div className=" container  mx-auto">
      <div className="search-header">
        <h1 className="text-2xl inline-block font-bold mt-2">
          Search results for "{search}"{" "}
        </h1>{" "}
        <h2> Page {page}</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
        {apps.map((app, index) => (
          <AppCard5 app={app} index={index} />
        ))}
      </div>
    </div>
  );
}
