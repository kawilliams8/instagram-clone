import React, { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Instagram - Profile";
  }, []);

  return <p>Hello from Profile</p>;
}
