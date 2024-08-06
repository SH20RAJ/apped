import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Image
              src="/logo.svg"
              alt="App Store Logo"
              width={50}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400">
              apped.me is your go-to platform for discovering and downloading
              the latest apps and games. Stay updated with our articles and
              reviews.
            </p>
          </div>
          {/* <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-fuchsia-600 mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
            </ul>
          </div> */}

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-fuchsia-600 mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/games"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Games
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/apps"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Apps
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-fuchsia-600 mb-4">Developers</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="/developers"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Developers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Submit APK
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/report"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Report
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact US
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://github.com/appedme/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  GitHub
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://dev.to/apped"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Dev Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex border-t border-gray-700 mt-8 pt-6 text-center justify-center">
          <span className=" flex  flex-col sm:flex-row gap-4">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} apped.me. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/dmca"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              DMCA
            </Link>
            <Link
              href="/tos"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Disclamer
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
