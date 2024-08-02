import React from 'react';

import gplay from 'google-play-scraper';
import SideBar from './SideBar';
import Link from 'next/link';
import { readableDate } from '@/lib/func';

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
  
const AppViewer = async ({appId}) => {

  let app = await gplay.app({appId: appId});

  console.log(app);

  return (
    <div className="container mx-auto px-4 py-8 flex">


      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        {/* App Header */}
        <div className="flex items-center mb-8">
          <img src={app.icon || "https://via.placeholder.com/150"} alt={app?.title} className="w-32 h-32 object-cover rounded-lg" />
          <div className="ml-4">
            <h1 className="text-3xl font-bold">{app.title}</h1>
            <p className="text-gray-600">{app.developer}</p>
            <p className="text-yellow-500 mt-1">⭐ {app.scoreText}</p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex gap-4 mb-8">
          <a href={"/api/download/"+appId} target='_' className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">Download APK {appId}</a>
          <a href={app.url} target='_' className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">Google Play</a>
        </div>

         {/* Screenshots */}
         <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="flex overflow-x-scroll space-x-4 pb-4">
            {app.screenshots.map((image, index) => (
              <img key={index} src={image} alt={`Screenshot ${index + 1}`} className="w-64 h-80 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        {/* App Details */}
        <div className="flex flex-col gap-8 mb-8">
          {/* Description and Tags */}
          
          <div>
          <h2 className="text-2xl font-bold mb-4">Description</h2>

            <p className="text-gray-700 mb-4 article" dangerouslySetInnerHTML={{__html: app.descriptionHTML}}></p>
            <div className="flex flex-wrap gap-2 mb-4">
              {app.categories.map((tag, index) => (
                <Link href={"/tag/"+tag.id}><span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{tag.name}</span></Link>
              ))}
            </div>
          </div>

          {/* App Information */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">App Information</h2>
            <ul>
              <li className="mb-1"><strong>Downloads:</strong> {parseInt(app.maxInstalls)}</li>
              <li className="mb-1"><strong>Size:</strong> {appDetails.size}</li>
              <li className="mb-1"><strong>Version:</strong> {appDetails.version}</li>
              <li className="mb-1"><strong>Updated:</strong> {readableDate(app.updated)}</li>
            </ul>
          </div>
        </div>

       

       {/* <Reviews/> */}

      </div>

      <SideBar appDetails={appDetails}/>
    </div>
  );
};

export default AppViewer;
