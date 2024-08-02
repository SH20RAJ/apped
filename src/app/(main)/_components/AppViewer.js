import React from 'react';
const appDetails = {
    name: "One State RP - Role Play Life",
    description: "Welcome to the first-ever open-world game built in RPG genre on mobile platforms, where you can act like in real life!",
    publisher: "Role Play Life",
    rating: 7.1,
    downloads: "1M+",
    size: "512 MB",
    version: "1.0.0",
    updated: "August 1, 2024",
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
    tags: ["Adventure", "RPG", "Open World"],
    reviews: [
      { user: "John Doe", rating: 4, comment: "Great game with immersive gameplay!" },
      { user: "Jane Smith", rating: 5, comment: "Absolutely love it, highly recommend!" },
      { user: "Alice Johnson", rating: 3, comment: "Good game but has some bugs." },
    ],
    relatedApps: [
      { name: "Genshin Impact", image: "https://via.placeholder.com/100x100" },
      { name: "Roblox", image: "https://via.placeholder.com/100x100" },
      { name: "Crafting and Building", image: "https://via.placeholder.com/100x100" },
    ],
  };
  
const AppViewer = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar */}
      <div className="w-1/4 pr-8 hidden lg:block">
        <h2 className="text-2xl font-bold mb-4">Other Apps</h2>
        <ul>
          {appDetails.relatedApps.map((app, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img src={app.image} alt={app.name} className="w-12 h-12 object-cover rounded-lg" />
              <span className="ml-4 text-gray-700">{app.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        {/* App Header */}
        <div className="flex items-center mb-8">
          <img src="https://via.placeholder.com/150" alt={appDetails.name} className="w-32 h-32 object-cover rounded-lg" />
          <div className="ml-4">
            <h1 className="text-3xl font-bold">{appDetails.name}</h1>
            <p className="text-gray-600">{appDetails.publisher}</p>
            <p className="text-yellow-500 mt-1">⭐ {appDetails.rating}</p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex gap-4 mb-8">
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">Download APK</a>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">Google Play</a>
        </div>

        {/* App Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Description and Tags */}
          <div>
            <p className="text-gray-700 mb-4">{appDetails.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {appDetails.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* App Information */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">App Information</h2>
            <ul>
              <li className="mb-1"><strong>Downloads:</strong> {appDetails.downloads}</li>
              <li className="mb-1"><strong>Size:</strong> {appDetails.size}</li>
              <li className="mb-1"><strong>Version:</strong> {appDetails.version}</li>
              <li className="mb-1"><strong>Updated:</strong> {appDetails.updated}</li>
            </ul>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="flex overflow-x-scroll space-x-4 pb-4">
            {appDetails.images.map((image, index) => (
              <img key={index} src={image} alt={`Screenshot ${index + 1}`} className="w-64 h-40 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        {/* User Reviews */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
          {appDetails.reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500">⭐ {review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppViewer;
