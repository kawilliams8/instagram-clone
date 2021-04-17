import React, { memo, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({userId}) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles(){
      const response = await getSuggestedProfiles();
    } 

    // if (userId) { suggestedProfiles() };
  }, [userId])

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5"/>
  ) : profiles.length > 0 ?
  (
    <div>
      'profiles here'
    </div>
  ) : null;
}

export default memo(Suggestions);