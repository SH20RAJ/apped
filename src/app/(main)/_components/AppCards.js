import { slugify } from "@/lib/func";
import Img from "@/lib/Img";
import Link from "next/link";

export const AppCard1 = ({ game }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-4">
      <img
        loading="lazy"
        // mode="cloudinary"
        src={game.image}
        alt={game.name}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{game.name}</h3>
        <p className="text-gray-600">{game.publisher}</p>
        <p className="text-yellow-800 mt-1">⭐ {game.rating}</p>
      </div>
    </div>
  );
};

export const AppCard2 = ({ game }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Img
        loading="lazy"
        // mode="cloudinary"
        src={game.image}
        alt={game.name}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{game.name}</h3>
      <p className="text-gray-600">{game.publisher}</p>
      <p className="text-yellow-800 mt-1">⭐ {game.rating}</p>
    </div>
  );
};

export const AppCard3 = ({ game }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-4">
      <img
        loading="lazy"
        src={game.image}
        alt={game.name}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{game.name}</h3>
        <p className="text-gray-600">{game.publisher}</p>
        <p className="text-yellow-800 mt-1">⭐ {game.rating}</p>
      </div>
    </div>
  );
};

export const AppCard4 = ({ app }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link href={"/" + slugify(app.title) + "/" + app.appId}>
        <img
          loading="lazy"
          src={app.icon}
          alt={app.title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h3 className="text-lg font-bold mt-2">{app.title}</h3>
      </Link>
      <p className="text-sm text-gray-500">{app.developer}</p>
      <div className="flex items-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="ml-1 text-sm text-gray-500">⭐️ {app.scoreText}</span>
      </div>
    </div>
  );
};

export const AppCard5 = ({ app }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-58">
      {" "}
      {/* Set a fixed height */}
      <Link
        aria-label={"App URL for " + app.title}
        href={"/" + slugify(app.title) + "/" + app.appId}
      >
        <Img
          loading="lazy"
          mode=""
          height={"180"}
          format={"webp"}
          src={app.icon}
          alt={"Logo Image for App" + app.title + "hosted on Apped.Me"}
          className="w-full h-28 object-cover rounded-t-lg"
        />
        <h3 className="text-lg font-semibold mt-2 truncate">{app.title}</h3>{" "}
        {/* Add truncate class */}
      </Link>
      <p className="text-gray-600 truncate">{app.developer}</p>{" "}
      {/* Add truncate class */}
      <p className="text-yellow-800 mt-1">⭐ {app.scoreText}</p>
    </div>
  );
};
