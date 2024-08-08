"use client";
import React, { useState } from "react";

const categories = [
  "Games",
  "Productivity",
  "Utilities",
  "Education",
  "Lifestyle","g",
  "Social",
  "Entertainment",
  "Health",
  "Finance",
];

export default function CreateApp() {
  const [previews, setPreviews] = useState({
    icon: "",
    screenshots: [],
    featuredGraphic: "",
  });

  const [formValues, setFormValues] = useState({
    packageName: "",
    type: "app",
    category: categories[0],
    icon: "",
    contentRating: "",
    title: "",
    policyUrl: "",
    shortDesc: "",
    desc: "",
    screenshots: [],
    featuredGraphic: "",
    youtubeVideo: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formValues.packageName) newErrors.packageName = "Package name is required";
    if (!formValues.title) newErrors.title = "Title is required";
    if (!formValues.icon) newErrors.icon = "Icon is required";
    if (formValues.screenshots.length === 0) newErrors.screenshots = "At least one screenshot is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      if (key === "screenshots") {
        formValues.screenshots.forEach((screenshot, index) => {
          formData.append(`screenshots[${index}]`, screenshot);
        });
      } else {
        formData.append(key, formValues[key]);
      }
    });

    const response = await fetch("/api/app/create", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("App created successfully!");
      setFormValues({
        packageName: "",
        type: "app",
        category: categories[0],
        icon: "",
        contentRating: "",
        title: "",
        policyUrl: "",
        shortDesc: "",
        desc: "",
        screenshots: [],
        featuredGraphic: "",
        youtubeVideo: "",
      });
      setPreviews({
        icon: "",
        screenshots: [],
        featuredGraphic: "",
      });
    } else {
      try {
        const errorData = await response.json();
        // alert(`Error: ${errorData.error}`);
      } catch (jsonError) {
        const textData = await response.text();
        // alert(`Error: ${textData}`);
      }
    }
  } catch (error) {
    // alert(`Error: ${error.message}`);
  }
};


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const fileArray = Array.from(files);
      const urls = fileArray.map((file) => URL.createObjectURL(file));

      setPreviews((prevPreviews) => ({
        ...prevPreviews,
        [name]: urls.length === 1 ? urls[0] : urls,
      }));

      if (name === "screenshots") {
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: fileArray,
        }));
      } else {
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: fileArray[0],
        }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between mb-8">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
          type="button"
        >
          Save Draft
        </button>
        <button
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
          onClick={handleSubmit}
        >
          Create App
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-8">Create a New App</h1>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Section 1: Basic Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="packageName"
                className="block text-sm font-medium text-gray-700"
              >
                Package Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="packageName"
                name="packageName"
                value={formValues.packageName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
                required
              />
              {errors.packageName && (
                <div className="text-red-600 text-sm">
                  {errors.packageName}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Type <span className="text-red-600">*</span>
              </label>
              <select
                id="type"
                name="type"
                value={formValues.type}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              >
                <option value="app">App</option>
                <option value="game">Game</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category <span className="text-red-600">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formValues.category}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="contentRating"
                className="block text-sm font-medium text-gray-700"
              >
                Content Rating
              </label>
              <input
                type="text"
                id="contentRating"
                name="contentRating"
                value={formValues.contentRating}
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
              <label
                htmlFor="icon"
                className="block text-sm font-medium text-gray-700"
              >
                Icon <span className="text-red-600">*</span>
              </label>
              <span className="text-xs text-gray-500">
                {" "}
                (Recommended size: 512x512)
              </span>
              <input
                type="file"
                id="icon"
                name="icon"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              {previews.icon && (
                <img
                  src={previews.icon}
                  alt="Icon Preview"
                  className="mt-2 w-24 h-24 object-cover"
                />
              )}
              {errors.icon && (
                <div className="text-red-600 text-sm">{errors.icon}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="screenshots"
                className="block text-sm font-medium text-gray-700"
              >
                Screenshots <span className="text-red-600">*</span>
              </label>
              <span className="text-xs text-gray-500">
                {" "}
                (Recommended size: 1080x1920)
              </span>
              <input
                type="file"
                id="screenshots"
                name="screenshots"
                multiple
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              <div className="mt-2 flex gap-2 flex-wrap">
                {previews.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
              {errors.screenshots && (
                <div className="text-red-600 text-sm">
                  {errors.screenshots}
                </div>
              )}
            </div>
            <div className="col-span-2">
              <label
                htmlFor="featuredGraphic"
                className="block text-sm font-medium text-gray-700"
              >
                Featured Graphic
              </label>
              <span className="text-xs text-gray-500">
                {" "}
                (Recommended size: 1024x500)
              </span>
              <input
                type="file"
                id="featuredGraphic"
                name="featuredGraphic"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-lg file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              {previews.featuredGraphic && (
                <img
                  src={previews.featuredGraphic}
                  alt="Featured Graphic Preview"
                  className="mt-2 w-full h-48 object-cover"
                />
              )}
            </div>
          </div>
        </div>

        {/* Section 3: Details */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Details</h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
                required
              />
              {errors.title && (
                <div className="text-red-600 text-sm">
                  {errors.title}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="policyUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Policy URL
              </label>
              <input
                type="url"
                id="policyUrl"
                name="policyUrl"
                value={formValues.policyUrl}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              />
            </div>
            <div>
              <label
                htmlFor="shortDesc"
                className="block text-sm font-medium text-gray-700"
              >
                Short Description
              </label>
              <textarea
                id="shortDesc"
                name="shortDesc"
                value={formValues.shortDesc}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
                rows="2"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="desc"
                name="desc"
                value={formValues.desc}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
                rows="5"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="youtubeVideo"
                className="block text-sm font-medium text-gray-700"
              >
                YouTube Video URL
              </label>
              <input
                type="url"
                id="youtubeVideo"
                name="youtubeVideo"
                value={formValues.youtubeVideo}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base p-3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

