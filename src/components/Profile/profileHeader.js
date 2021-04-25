import React, { useContext, useEffect, useState } from 'react';
import useUser from "../../hooks/use-user";
import Skeleton from "react-loading-skeleton";
import { toggleFollow } from "../../services/firebase";

export default function ProfileHeader({
  photosCount,
  followerCount,
  setFollowerCount,
  username,
  profile
}) {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const { user } = useUser();
  const activeFollowBtn = user.username && user.username !== username;

  const handleToggleFollow = async () => {
    setIsFollowingProfile(isFollowingProfile => !isFollowingProfile);
    setFollowerCount({ followerCount : isFollowingProfile ? followerCount - 1 : followerCount + 1})
    await toggleFollow(isFollowingProfile, user.docId, user.userId, profile.docId, profile.userId);
  }
  
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
          {activeFollowBtn && (
            <button
              className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8"
              type="button"
              onClick={() => handleToggleFollow()}
            >
              {isFollowingProfile ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
        <div className="container flex mt-4">
          {profile.followers === undefined ||
          profile.following === undefined ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{photosCount}</span> photos
              </p>
              <p className="mr-10">
                <span className="font-bold">{followerCount}</span>{" "}
                {followerCount === 1 ? "follower" : "followers"}
              </p>
              <p className="mr-10">
                <span className="font-bold">
                  {profile.following.length || 0}
                </span>{" "}
                following
              </p>
            </>
          )}
        </div>
        <div className="container mt-4">
          <p className="font-medium">
            {!profile.fullName ? <Skeleton count={1} height={24} /> : profile.fullName}
          </p>
        </div>
      </div>
    </div>
  );
}