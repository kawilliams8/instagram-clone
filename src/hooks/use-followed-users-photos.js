import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos() {
  const [photos, setPhotos] = useState(null); //Falsy to trigger the <Skeleton> initially
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {}
    getTimelinePhotos();
  }, [user]);

  return {photos: photos};
}