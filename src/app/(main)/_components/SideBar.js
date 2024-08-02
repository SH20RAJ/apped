import React from "react";

export default function SideBar({appDetails}) {
  return (
    <div>
      {/* Sidebar */}
      <div className="w-1/4 pr-8 hidden lg:block">
        <h2 className="text-2xl font-bold mb-4">Other Apps</h2>
        <ul>
          {appDetails.relatedApps.map((app, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img
                src={app.image}
                alt={app.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <span className="ml-4 text-gray-700">{app.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
