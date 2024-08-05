"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";

export default function SearchBar() {
  let q = useSearchParams();
  q = q.get("q") || "";

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex items-center space-x-4 p-2">
        <div className="relative text-gray-600 focus-within:text-gray-800">
          <FiSearch className="absolute left-3 top-2.5" />
          <form action="/search">
            <input
              type="search"
              className="py-2  pl-10 pr-4 text-sm bg-gray-100 rounded-full focus:outline-none focus:bg-white shadow transition duration-300"
              placeholder="Search..."
              defaultValue={q}
              onChange={(e) => setSearch(e.target.value)}
              name="q"
            />
          </form>
        </div>
        <Link href="/dashboard" aria-label={"Dashboard"}>
          <FiUser
            alt="User Icon"
            className="text-2xl text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
