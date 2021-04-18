import React, { useEffect, useReducer } from 'react';
import ProfileHeader from './profileHeader';
import ProfilePhotos from './profilePhotos';
import { getUserByUsername } from '../../services/firebase'

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

    }
    getProfileAndPhotos();
  }, [username])

  return (
    <div>
      <ProfileHeader/>
      <ProfilePhotos />
    </div>
  )
}