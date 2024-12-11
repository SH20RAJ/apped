import React from "react";

export let categories = [
    {
        id: 1,
        name: "Games",
        slug: "GAMES",
    },
    {
        id: 2,
        name: "Apps",
        slug: "APPS",
    },
    {
        id: 3,
        name: "Education",
        slug: "EDUCATION",
    },
    {
        id: 4,
        name: "Entertainment",
        slug: "ENTERTAINMENT",
    },
    {
        id: 5,
        name: "Lifestyle",
        slug: "LIFESTYLE",
    },
    {
        id: 6,
        name: "Utilities",
        slug: "UTILITIES",
    },
    {
        id: 7,
        name: "Health & Fitness",
        slug: "HEALTH_FITNESS",
    },
    {
        id: 8,
        name: "Productivity",
        slug: "PRODUCTIVITY",
    },
    {
        id: 9,
        name: "Social Networking",
        slug: "SOCIAL_NETWORKING",
    },
    {
        id: 10,
        name: "Photo & Video",
        slug: "PHOTO_VIDEO",
    },
    {
        id: 11,
        name: "Music",
        slug: "MUSIC",
    },
    {
        id: 12,
        name: "Shopping",
        slug: "SHOPPING",
    },
    {
        id: 13,
        name: "News",
        slug: "NEWS",
    },
    {
        id: 14,
        name: "Travel",
        slug: "TRAVEL",
    },
    {
        id: 15,
        name: "Finance",
        slug: "FINANCE",
    },
    {
        id: 16,
        name: "Food & Drink",
        slug: "FOOD_DRINK",
    },
    {
        id: 17,
        name: "Sports",
        slug: "SPORTS",
    },
    {
        id: 18,
        name: "Weather",
        slug: "WEATHER",
    },
    {
        id: 19,
        name: "Reference",
        slug: "REFERENCE",
    },
    {
        id: 20,
        name: "Business",
        slug: "BUSINESS",
    },
    {
        id: 21,
        name: "Book",
        slug: "BOOK",
    },
    {
        id: 22,
        name: "Medical",
        slug: "MEDICAL",
    },
    {
        id: 23,
        name: "Catalogs",
        slug: "CATALOGS",
    },
    {
        id: 24,
        name: "Developer Tools",
        slug: "DEVELOPER_TOOLS",
    },
    {
        id: 25,
        name: "Graphics & Design",
        slug: "GRAPHICS_DESIGN",
    },
    {
        id: 26,
        name: "Music & Audio",
        slug: "MUSIC_AUDIO",
    },
    {
        id: 27,
        name: "Art & Design",
        slug: "ART_DESIGN",
    },
    {
        id: 28,
        name: "Auto & Vehicles",
        slug: "AUTO_VEHICLES",
    },
    {
        id: 29,
        name: "Beauty",
        slug: "BEAUTY",
    },
    {
        id: 30,
        name: "Books & Reference",
        slug: "BOOKS_REFERENCE",
    },
    {
        id: 31,
        name: "Comics",
        slug: "COMICS",
    },
    {
        id: 32,
        name: "Communication",
        slug: "COMMUNICATION",
    },
    {
        id: 33,
        name: "Dating",
        slug: "DATING",
    },
    {
        id: 34,
        name: "Events",
        slug: "EVENTS",
    },
    {
        id: 35,
        name: "House & Home",
        slug: "HOUSE_HOME",
    },
    {
        id: 36,
        name: "Libraries & Demo",
        slug: "LIBRARIES_DEMO",
    },
    {
        id: 37,
        name: "Maps & Navigation",
        slug: "MAPS_NAVIGATION",
    },
    {
        id: 38,
        name: "Parenting",
        slug: "PARENTING",
    },
    {
        id: 39,
        name: "Personalization",
        slug: "PERSONALIZATION",
    },
    {
        id: 40,
        name: "Photography",
        slug: "PHOTOGRAPHY",
    },
    {
        id: 41,
        name: "Video Players & Editors",
        slug: "VIDEO_PLAYERS_EDITORS",
    },
    {
        id: 42,
        name: "Wear OS",
        slug: "WEAR_OS",
    },
    {
        id: 43,
        name: "Game Action",
        slug: "GAME_ACTION",
    },
    {
        id: 44,
        name: "Game Adventure",
        slug: "GAME_ADVENTURE",
    },
    {
        id: 45,
        name: "Game Arcade",
        slug: "GAME_ARCADE",
    },
    {
        id: 46,
        name: "Game Board",
        slug: "GAME_BOARD",
    },
    {
        id: 47,
        name: "Game Card",
        slug: "GAME_CARD",
    },
    {
        id: 48,
        name: "Game Casino",
        slug: "GAME_CASINO",
    },
    {
        id: 49,
        name: "Game Casual",
        slug: "GAME_CASUAL",
    },
    {
        id: 50,
        name: "Game Educational",
        slug: "GAME_EDUCATIONAL",
    },
    {
        id: 51,
        name: "Game Music",
        slug: "GAME_MUSIC",
    },
    {
        id: 52,
        name: "Game Puzzle",
        slug: "GAME_PUZZLE",
    },
    {
        id: 53,
        name: "Game Racing",
        slug: "GAME_RACING",
    },
    {
        id: 54,
        name: "Game Role Playing",
        slug: "GAME_ROLE_PLAYING",
    },
    {
        id: 55,
        name: "Game Simulation",
        slug: "GAME_SIMULATION",
    },
    {
        id: 56,
        name: "Game Sports",
        slug: "GAME_SPORTS",
    },
    {
        id: 57,
        name: "Game Strategy",
        slug: "GAME_STRATEGY",
    },
    {
        id: 58,
        name: "Game Trivia",
        slug: "GAME_TRIVIA",
    },
    {
        id: 59,
        name: "Game Word",
        slug: "GAME_WORD",
    },
];

export default function page() {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow-md p-4 rounded-lg flex items-center justify-center"
            >
              <a href={`/tag/${category.slug}`}>{category.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
