import React from 'react';
import Skeleton from "react-loading-skeleton";

export default function ProfilePhotos({ photos }) {
  return (
    <div className="h-16 border-t border-gray mt-12 pt-4">
      { !photos ? (
          <Skeleton count={9} height={320} width={400} />
        ) : photos.length > 0 ? (
          photos.map((photo, index) => {
            return <img key={index} src={photo.imageSrc}/>
          })
        ) : (
          <p>No photos to display yet.</p>
        )
      }
    </div>
  )
}