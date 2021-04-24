import React from 'react';
import Skeleton from "react-loading-skeleton";

export default function ProfilePhotos({ photos }) {
  return photos.length === 0 ? (
    <p>No photos to display yet.</p>
  ) : (
    <>
      <Skeleton count={9} height={320} width={400} />
    </>
  );
}