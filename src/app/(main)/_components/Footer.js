"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="App Store Logo"
              width={50}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400">
              apped.me is your go-to platform for discovering and downloading the latest apps and games. Stay updated with our articles and reviews.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-fuchsia-600 mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Games
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Apps
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Articles
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-fuchsia-600 mb-4">Categories</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  New
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Reviews
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  How-To
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Topics
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-fuchsia-600 mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.592-1.325 1.325v21.351c0 .732.593 1.324 1.325 1.324h11.494v-9.294h-3.125v-3.622h3.125v-2.669c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.795.144v3.24h-1.918c-1.505 0-1.795.714-1.795 1.763v2.31h3.587l-.467 3.621h-3.12v9.293h6.112c.732 0 1.325-.592 1.325-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.61 1.798-1.574 2.165-2.724-.951.565-2.005.978-3.127 1.197-.896-.957-2.173-1.555-3.59-1.555-2.717 0-4.917 2.2-4.917 4.917 0 .386.043.762.127 1.124-4.083-.205-7.702-2.16-10.126-5.132-.423.725-.666 1.562-.666 2.458 0 1.695.863 3.188 2.175 4.064-.801-.025-1.555-.245-2.215-.612v.062c0 2.366 1.684 4.342 3.918 4.787-.41.111-.841.171-1.285.171-.314 0-.618-.03-.916-.086.619 1.934 2.417 3.341 4.543 3.379-1.666 1.307-3.765 2.086-6.045 2.086-.393 0-.779-.023-1.162-.068 2.157 1.384 4.72 2.192 7.476 2.192 8.97 0 13.872-7.434 13.872-13.872 0-.211 0-.423-.016-.633.953-.688 1.78-1.55 2.436-2.531z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.61 1.792-1.574 2.163-2.724-.951.565-2.005.978-3.127 1.197-.896-.957-2.173-1.555-3.59-1.555-2.72 0-4.926 2.206-4.926 4.923 0 .386.045.761.127 1.124-4.094-.205-7.72-2.162-10.141-5.132-.424.726-.667 1.561-.667 2.459 0 1.695.864 3.188 2.179 4.065-.8-.025-1.554-.245-2.213-.612v.062c0 2.366 1.683 4.342 3.918 4.787-.41.111-.841.171-1.284.171-.314 0-.62-.03-.918-.086.62 1.934 2.416 3.341 4.543 3.379-1.666 1.307-3.765 2.086-6.045 2.086-.393 0-.779-.023-1.162-.068 2.159 1.384 4.721 2.192 7.477 2.192 8.97 0 13.872-7.434 13.872-13.872 0-.211 0-.423-.015-.633.951-.689 1.777-1.551 2.436-2.531z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c-5.473 0-9.838 4.364-9.838 9.837 0 4.34 2.807 8.027 6.732 9.322-.087-.8-.165-2.029.033-2.905.18-.785 1.165-4.997 1.165-4.997s-.297-.594-.297-1.472c0-1.379.8-2.409 1.795-2.409.847 0 1.255.637 1.255 1.4 0 .854-.544 2.129-.826 3.314-.234.997.498 1.807 1.48 1.807 1.776 0 3.143-1.87 3.143-4.566 0-2.384-1.71-4.054-4.152-4.054-2.83 0-4.49 2.122-4.49 4.313 0 .853.33 1.768.744 2.265.083.1.095.188.07.288-.074.303-.242.979-.274 1.113-.043.183-.143.22-.332.133-1.244-.575-2.02-2.383-2.02-3.836 0-3.118 2.265-5.98 6.545-5.98 3.437 0 6.113 2.453 6.113 5.726 0 3.414-2.16 6.163-5.157 6.163-1.006 0-1.955-.524-2.28-1.142l-.622 2.368c-.225.883-.837 1.986-1.25 2.659.94.291 1.932.447 2.965.447 5.473 0 9.838-4.364 9.838-9.838 0-5.472-4.365-9.837-9.838-9.837z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} apped.me. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
