import React, { memo, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({}) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles(){
      const response = await getSuggestedProfiles();
    } 

    if (userId) suggestedProfiles();
  }, [userId])

  return (
    <>
    </>
  )
}

export default memo(Suggestions);