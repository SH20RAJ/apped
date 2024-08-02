"use client";
import Image from "next/image";
import { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="App Store Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="text-fuchsia-600 hover:text-fuchsia-800 transition duration-300">
                Games
              </a>
            </li>
            <li>
              <a href="#" className="text-fuchsia-600 hover:text-fuchsia-800 transition duration-300">
                Apps
              </a>
            </li>
            <li className="relative">
              <button onClick={() => setDropdown(!dropdown)} className="text-fuchsia-600 hover:text-fuchsia-800 transition duration-300 flex items-center">
                Articles
                <svg className="ml-1 w-4 h-4 transform transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              {dropdown && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-100 transition duration-300">
                      New
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-100 transition duration-300">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-100 transition duration-300">
                      How-To
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-fuchsia-100 transition duration-300">
                      Topics
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative text-gray-600 focus-within:text-gray-800">
            <FiSearch className="absolute left-3 top-2.5" />
            <input
              type="search"
              className="py-2 pl-10 pr-4 text-sm bg-gray-100 rounded-full focus:outline-none focus:bg-white shadow transition duration-300"
              placeholder="Search..."
            />
          </div>
          <FiUser className="text-2xl text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
