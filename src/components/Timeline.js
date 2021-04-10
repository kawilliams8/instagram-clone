import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../hooks/use-followed-users-photos';

export default function Timeline () {
  const { photos } = useFollowedUsersPhotos();

  return (
    <>
      {!photos ? (
        <SkeletonTheme color="white" highlightColor="#efefef">
          <Skeleton count={4} width={640} height={500} className="mb-5"/>
        </SkeletonTheme>
      ) : photos && photos.length > 0 ? (
        photos.map((photo) => (
          <p key={photo.docId} src={photo.imageSrc}>{photo.username}</p>
        ))
      ) : (
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </>
  );
};