import React from "react";
import DashSideBar from "./components/DashSideBar";
import DashNav from "./components/DashNav";
import DashFooter from "./components/DashFooter";

export default function DashBoardLayOut({ children }) {
  return (<h1> Currently We are not accepting apps from your region.</h1>)
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
