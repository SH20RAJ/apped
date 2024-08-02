export const AppCard1 = ({ game }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-4">
      <img
        src={game.image}
        alt={game.name}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{game.name}</h3>
        <p className="text-gray-600">{game.publisher}</p>
        <p className="text-yellow-500 mt-1">⭐ {game.rating}</p>
      </div>
    </div>
  );
};


export const AppCard2 = ({ game }) => {
    return (
        <div   className="bg-white rounded-lg shadow-md p-4">
              <img src={game.image} alt={game.name} className="w-full h-32 object-cover rounded-t-lg" />
              <h3 className="text-lg font-semibold mt-2">{game.name}</h3>
              <p className="text-gray-600">{game.publisher}</p>
              <p className="text-yellow-500 mt-1">⭐ {game.rating}</p>
            </div>

    );
}

