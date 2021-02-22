import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Instagram - Login";
  }, []);

  return <p>Hello from NotFound</p>;
}
