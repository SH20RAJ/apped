"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiUpload, FiFileText, FiVideo } from 'react-icons/fi';

const categories = [
  'Games', 'Productivity', 'Utilities', 'Education', 'Lifestyle', 'Social', 'Entertainment', 'Health', 'Finance'
];

export default function CreateApp() {
  const [form, setForm] = useState({
    packageName: '',
    type: 'app',
    category: categories[0],
    icon: '',
    contentRating: '',
    title: '',
    policyUrl: '',
    shortDesc: '',
    desc: '',
    screenshots: [],
    featuredGraphic: '',
    youtubeVideo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      if (name === 'screenshots') {
        setForm({
          ...form,
          screenshots: Array.from(files).map(file => URL.createObjectURL(file))
        });
      } else {
        setForm({
          ...form,
          [name]: URL.createObjectURL(files[0])
        });
      }
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">

      <div className="flex justify-between mb-8">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Save Draft
        </button>
        <button
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
          disabled={!form.title || !form.packageName} // Disable if essential fields are empty
        >
          Create App
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-8">Create a New App</h1>
      <form className="space-y-8">
        {/* Section 1: Basic Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="packageName" className="block text-sm font-medium text-gray-700">Package Name</label>
              <input
                type="text"
                id="packageName"
                name="packageName"
                value={form.packageName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              >
                <option value="app">App</option>
                <option value="game">Game</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contentRating" className="block text-sm font-medium text-gray-700">Content Rating</label>
              <input
                type="text"
                id="contentRating"
                name="contentRating"
                value={form.contentRating}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Media */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="icon" className="block text-sm font-medium text-gray-700">Icon</label>
              <input
                type="file"
                id="icon"
                name="icon"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              {form.icon && <img src={form.icon} alt="Icon Preview" className="mt-2 w-24 h-24 object-cover" />}
            </div>
            <div>
              <label htmlFor="screenshots" className="block text-sm font-medium text-gray-700">Screenshots</label>
              <input
                type="file"
                id="screenshots"
                name="screenshots"
                multiple
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              <div className="mt-2 flex gap-2 flex-wrap">
                {form.screenshots.map((screenshot, index) => (
                  <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="w-32 h-32 object-cover rounded-lg" />
                ))}
              </div>
            </div>
            <div className="col-span-2">
              <label htmlFor="featuredGraphic" className="block text-sm font-medium text-gray-700">Featured Graphic</label>
              <input
                type="file"
                id="featuredGraphic"
                name="featuredGraphic"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              {form.featuredGraphic && <img src={form.featuredGraphic} alt="Featured Graphic Preview" className="mt-2 w-full h-48 object-cover" />}
            </div>
          </div>
        </div>

        {/* Section 3: Details */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Details</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="policyUrl" className="block text-sm font-medium text-gray-700">Policy URL</label>
              <input
                type="url"
                id="policyUrl"
                name="policyUrl"
                value={form.policyUrl}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              />
            </div>
            <div>
              <label htmlFor="shortDesc" className="block text-sm font-medium text-gray-700">Short Description</label>
              <textarea
                id="shortDesc"
                name="shortDesc"
                value={form.shortDesc}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              />
            </div>
            <div>
              <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="desc"
                name="desc"
                value={form.desc}
                onChange={handleChange}
                rows="6"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              />
            </div>
            <div>
              <label htmlFor="youtubeVideo" className="block text-sm font-medium text-gray-700">YouTube Video URL</label>
              <input
                type="url"
                id="youtubeVideo"
                name="youtubeVideo"
                value={form.youtubeVideo}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="flex justify-between mt-8">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Save Draft
        </button>
        <button
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
          disabled={!form.title || !form.packageName} // Disable if essential fields are empty
        >
          Create App
        </button>
      </div>
    </div>
  );
}
