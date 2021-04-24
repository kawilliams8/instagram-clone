import React, { useEffect, useReducer } from 'react';
import ProfileHeader from './profileHeader';
import ProfilePhotos from './profilePhotos';
import {
  getUserByUsername,
  getPhotosByUsername,
} from "../../services/firebase";

export default function UserProfile({username}) {
  const reducer = (state, newState) => ({...state, ...newState});
  const initialState = {
    profile: {},
    photos: [],
    followerCount: 0,
  }

  const [{ profile, photos, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(() => {
    async function getProfileAndPhotos() {
      const [{ ...user } ] = await getUserByUsername(username);
      const photos = await getPhotosByUsername(username);

      //Dispatch the new state, matched obj to initialState 
      dispatch({
        profile: user,
        photos: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileAndPhotos();
  }, [username])

  return (
    <div>
      <ProfileHeader
        //Pass state and the dispatch so the child component can update Profile state
        photosCount={photos.length || 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <ProfilePhotos photos={photos} />
    </div>
  )
}