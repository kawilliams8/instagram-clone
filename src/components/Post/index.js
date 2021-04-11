import React from "react";
import Actions from "./actions";
import AddComment from "./add-comment";
import Footer from "./footer";
import Header from "./header";
import Image from "./image";

export default function Post({ content }) {
  return (
    <div className="rounded col-span-4 border bg-white mb-16">
      <Image
        key={content.docId}
        src={content.imageSrc}
        caption={content.caption}
      />
      <Footer username={content.username} caption={content.caption} />
    </div>
  );
}
