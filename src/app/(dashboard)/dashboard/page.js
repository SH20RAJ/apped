import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div
      className="
       text-2xl flex flex-col justify-center items-center h-screen hover:text-gray-800 transition duration-300 cursor-pointer
      "
    >
      Currently We are not accepting any new users 
      <Link href={"/"}>
        {" "}
        <span className=" underline "> {"< |"}Go Home {"| >"}</span>{" "}
      </Link>
    </div>
  );
}
