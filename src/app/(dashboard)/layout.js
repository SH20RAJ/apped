import React from "react";
import DashSideBar from "./components/DashSideBar";
import DashNav from "./components/DashNav";
import DashFooter from "./components/DashFooter";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function DashBoardLayOut({ children }) {
  return (<h1> Currently We are not accepting apps from your region.</h1>)
  const session = await auth()
  if(!session) redirect("/signin");
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <DashSideBar />
        <div className="flex-1 flex flex-col">
          <DashNav />
          <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
            {children}
          </main>
        </div>
      </div>
      <DashFooter />
    </div>
  );
}
