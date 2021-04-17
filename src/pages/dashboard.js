import React, { useEffect } from "react";
import Header from "../components/Header.js";
import Timeline from "../components/Timeline.js";
import Sidebar from "../components/Sidebar/index.js";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram - Dashboard";
  }, []);

  return (
    <div className="bg-gray-200">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
