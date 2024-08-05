"use client";
import { Eye } from "lucide";
import React, { useState } from "react";
import { Edit, Edit2, EyeOff } from "react-feather";
import { FiEye, FiSearch } from "react-icons/fi";

const apps = [
  {
    name: "App 1",
    packageName: "com.example.app1",
    logo: "https://res.cloudinary.com/practicaldev/image/fetch/h_180,f_webp/https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA",
    version: "1.0.0",
    updatedOn: "2024-08-01",
    installs: "1,000",
    status: "Active",
  },
  {
    name: "App 2",
    packageName: "com.example.app2",
    logo: "https://res.cloudinary.com/practicaldev/image/fetch/h_180,f_webp/https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM",
    version: "2.0.0",
    updatedOn: "2024-07-15",
    installs: "500",
    status: "Inactive",
  },
  // Add more apps as needed
];

export default function AppList() {
  const [search, setSearch] = useState("");

  const filteredApps = apps.filter(
    (app) =>
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.packageName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">App List</h1>
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 pl-10 border rounded-lg shadow-sm"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="  text-left">
            <tr>
              <th className="p-4 border-b">App</th>
              <th className="p-4 border-b">Version</th>
              <th className="p-4 border-b">Updated on</th>
              <th className="p-4 border-b">Installs (30 Days)</th>
              <th className="p-4 border-b">Status</th>
              <th className="p-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {filteredApps.map((app, index) => (
              <tr key={index} className="border-b hover:bg-slate-100">
                <td className="p-4 flex items-center space-x-4">
                  <img
                    src={app.logo}
                    alt={`${app.name} logo`}
                    className="h-10 w-10 object-cover rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{app.name}</div>
                    <div className="text-gray-600 text-sm">
                      {app.packageName}
                    </div>
                  </div>
                </td>
                <td className="p-4">{app.version}</td>
                <td className="p-4">{app.updatedOn}</td>
                <td className="p-4">{app.installs}</td>
                <td className="p-4">{app.status}</td>
                <td className="p-4 flex space-x-2">
                  <button className=" hover:text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300">
                    <FiEye size={20} />
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300">
                    <Edit2  size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
