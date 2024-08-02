import React from 'react';
import { AppCard1 , AppCard2 } from './AppCards';

const actionGames = [
  { name: "Free Fire: 7th Anniversary", publisher: "Garena International I", rating: 8.6, image: "https://via.placeholder.com/150" },
  { name: "PUBG MOBILE", publisher: "Level Infinite", rating: 8.7, image: "https://via.placeholder.com/150" },
  { name: "Mobile Legends: Bang Bang", publisher: "Moonton", rating: 7.3, image: "https://via.placeholder.com/150" },
  { name: "Call of Duty: Mobile", publisher: "Activision", rating: 8.2, image: "https://via.placeholder.com/150" },
  { name: "Among Us", publisher: "InnerSloth LLC", rating: 7.2, image: "https://via.placeholder.com/150" }
];

const adventureGames = [
  { name: "Roblox", publisher: "Roblox Corporation", rating: 8.1, image: "https://via.placeholder.com/150" },
  { name: "ARK: Survival Evolved", publisher: "Studio Wildcard", rating: 7.7, image: "https://via.placeholder.com/150" },
  { name: "One State RP", publisher: "Role Play Life", rating: 7.1, image: "https://via.placeholder.com/150" },
  { name: "Crafting and Building", publisher: "GeneRe", rating: 8.3, image: "https://via.placeholder.com/150" },
  { name: "PK XD: Fun, friends & games", publisher: "PlayKids Inc", rating: 7.1, image: "https://via.placeholder.com/150" }
];

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Action Games Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Action Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {actionGames.map((game, index) => (
            <AppCard1 key={index} game={game} />
          ))}
        </div>
      </div>

      {/* Adventure Games Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Adventure Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {adventureGames.map((game, index) => (
            <AppCard2 key={index} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
