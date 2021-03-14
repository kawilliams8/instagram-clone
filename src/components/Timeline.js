import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Timeline () {
  const photos = null;

  return (
    <>
      {!photos ? (
        <SkeletonTheme color="white" highlightColor="#efefef">
          <Skeleton count={4} width={640} height={500} className="mb-5"/>
        </SkeletonTheme>
      ): (
        photos.map(photo => <p>{photo}</p>)
      )}
    </>
  );
};