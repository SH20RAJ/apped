"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="App Store Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
          <ul className="hidden md:flex space-x-6">
            <Link href="/" className=" text-xl text-blue-500  ">
              Apped
            </Link>

            <li>
              <Link
                href="/games"
                className="text-fuchsia-600 hover:text-fuchsia-800 transition duration-300"
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                href="/apps"
                className="text-fuchsia-600 hover:text-fuchsia-800 transition duration-300"
              >
                Apps
              </Link>
            </li>
            <li className="relative">
              <button className="text-fuchsia-600 hover:text-fuchsia-800 transition duration-300 flex items-center">
                <Link href={"/articles"}> Articles </Link>
              </button>
            </li>
          </ul>
        </div>
        <SearchBar />
      </nav>
    </header>
  );
}
