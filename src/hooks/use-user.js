import { useState, useEffect, useContext } from 'react';
import { getUserByUserId } from "../services/firebase";
import UserContext from '../context/user';
import "@babel/polyfill";

export default function useUser () {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId(id) {
      const [response] = await getUserByUserId(id);
      setActiveUser({ ...response});
    }
    
    if (user && user.uid){
      getUserObjByUserId(user.uid);
    }
  }, [user]);

  return {user: activeUser};
}