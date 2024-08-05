import React from "react";
import Link from "next/link";
import {
  FiGrid,
  FiBarChart2,
  FiSettings,
  FiStar,
  FiPlus,
} from "react-icons/fi";

export default function DashSideBar() {
  return (
    <div className="bg-white shadow-md h-screen w-64">
      <div className="flex flex-col h-full">
        {/* Create App Button */}
        <div className="flex items-center justify-center h-16 bg-800 a-white">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold">Apped</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex-1">
          <ul>
            <li>
              <Link href="/dashboard/create-app">
                <button className="flex items-center bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-4 py-2 rounded-md   m-4 mx-auto">
                  <FiPlus className="mr-2" />
                  Create App
                </button>
              </Link>
            </li>

            <li className="px-4 py-4">
              <Link
                href="/apps"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <FiGrid className="mr-3 text-lg" />
                Apps
              </Link>
            </li>
            <li className="px-4 py-4">
              <Link
                href="/stats"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <FiBarChart2 className="mr-3 text-lg" />
                Stats
              </Link>
            </li>
            <li className="px-4 py-4">
              <Link
                href="/settings"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <FiSettings className="mr-3 text-lg" />
                Settings
              </Link>
            </li>
            <li className="px-4 py-4">
              <Link
                href="/reviews"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <FiStar className="mr-3 text-lg" />
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
