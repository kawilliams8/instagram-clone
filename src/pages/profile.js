import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Header from "../components/Header";
import UserProfile from '../components/Profile';
import { getUserByUsername } from '../services/firebase';
import "@babel/polyfill";

export default function Profile() {
  const { username } = useParams();
  const [userExists, setUserExists] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExistsToLoadProfile() {
      const doesUserExist = await getUserByUsername(username);
      if (!doesUserExist) {
        history.push(ROUTES.NOT_FOUND);
      } else {
        setUserExists(true);
      }
    }
    checkUserExistsToLoadProfile();
  }, [username, history]);

  return userExists ? (
    <div className="bg-gray">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile username={username} />
      </div>
    </div>
  ) : (
    null
  );
}
