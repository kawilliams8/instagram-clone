import React from "react";
import Actions from "./actions";
import AddComment from "./add-comment";
import Footer from "./footer";
import Header from "./header";
import Image from "./image";

export default function Post({ content }) {
  return (
    <div className="rounded col-span-4 border bg-white mb-16">
      <p>I am going to be a styled div!</p>
    </div>
  );
}
