import React from 'react';
import Skeleton from "react-loading-skeleton";

export default function ProfilePhotos({ photos }) {
  return (
    <div className="h-16 border-t border-gray mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!photos ? (
          <Skeleton count={9} height={320} width={400} />
        ) : photos.length > 0 ? (
          photos.map((photo, index) => {
            return (
              <div key={'container' + index} className="relative group">
                <img
                  key={"img" + index}
                  src={photo.imageSrc}
                  alt={photo.caption}
                />
                <div key={"info" + index} className="flex flex-start ml-1">
                  <svg
                    // onClick={() =>
                    //   handleToggleLiked((toggleLiked) => !toggleLiked)
                    // }
                    // onKeyDown={(e) => {
                    //   if (e.key === "Enter") {
                    //     handleToggleLiked((toggleLiked) => !toggleLiked);
                    //   }
                    // }}
                    key={"svg" + index}
                    className={`w-8 mr-2 select-none cursor-pointer fill-current stroke-current text-red-500`}
                    // ${
                    // toggleLiked
                    //   ? "fill-current stroke-current text-red-500"
                    //   : "text-black"
                    // }
                    // `}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    tabIndex={0}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <div key={"likes" + index} className="text-lg mt-1">
                    {photo.likes.length}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No photos to display yet.</p>
        )}
      </div>
    </div>
  );
}