import React from 'react';

export default function DashFooter() {
  return
  return (
    <footer className="bg-gray-200 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Apped. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-sm hover:text-gray-400 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm hover:text-gray-400 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm hover:text-gray-400 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
