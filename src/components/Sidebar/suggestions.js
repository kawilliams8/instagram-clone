import React, { memo, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from './suggestedProfile';

const Suggestions = ({ userId }) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles(){
      const response = await getSuggestedProfiles();
      setProfiles(response);
    } 

    if (userId) { suggestedProfiles() };
  }, [userId])

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="grid">
      {profiles.map(profile => (
        <SuggestedProfile
          key={profile.docId}
          userDocId={profile.docId}
          username={profile.username}
          profileId={profile.userId}
          userId={userId}
        />
      ))}
    </div>
  ) : null;
}

export default memo(Suggestions);