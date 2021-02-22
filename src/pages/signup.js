import React, { useEffect } from "react";

export default function Signup() {
  useEffect(() => {
    document.title = "Instagram - Sign Up";
  }, []);

  return <p>Hello from Signup</p>;
}
