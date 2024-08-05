'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function DashNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md  top-0 w-full z-50">
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
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <Link href="/" className="hover:text-gray-500 transition duration-300">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md font-medium hover:bg-blue-600 transition duration-300">
            Add App
          </button>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-gray-800 focus:outline-none"
            >
              <FiMenu className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} aria-hidden="true" />
              <FiX className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} aria-hidden="true" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <a
                  href="logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
              Dashboard
            </Link>
            <a
              href="/logout"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
