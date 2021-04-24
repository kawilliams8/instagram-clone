import React, { useEffect, useState } from 'react';

export default function ProfileHeader({
  photosCount,
  followerCount,
  setFollowerCount,
  profile,
  username,
}) {
  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        <img
          className="rounded-full h-40 w-40 flex"
          alt={`${username} profile picture`}
          src={`/images/avatars/${username}.jpg`}
        />
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{username}</p>
        </div>
      </div>
    </div>
  );
}