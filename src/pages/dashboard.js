import React, { useEffect } from "react";
import UserContext from '../context/user.js';
import Header from "../components/Header.js";
import Timeline from "../components/Timeline.js";
import Sidebar from "../components/sidebar/Sidebar.js";

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
