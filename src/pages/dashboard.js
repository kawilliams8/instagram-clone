import React, { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram - Dashboard";
  }, []);

  return <p>Hello from Dashboard</p>;
}
