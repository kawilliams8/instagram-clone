import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Instagram - 404 - Not Found";
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Uh oh! This page not found.</p>
      </div>
    </div>
  );
}
