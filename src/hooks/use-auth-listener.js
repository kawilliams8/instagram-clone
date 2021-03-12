import { useState, useEffect, useContext } from 'react';
import FirebaseContext from "../context/firebase";

export default function UseAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userAuth')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(() => {
      if (authUser) {
        //Persist the user in state and localStorage
        localStorage.setItem(JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem(authUser);
        setUser(null);
      }
    })

    return () => listener();
  }, [firebase]);

  return { user };
}