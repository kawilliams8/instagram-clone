import React, { useEffect } from 'react';
import ProfileHeader from './profileHeader';
import ProfilePhotos from './profilePhotos';

export default function UserProfile({username}) {

  return (
    <div>
      <ProfileHeader/>
      <ProfilePhotos />
    </div>
  )
}