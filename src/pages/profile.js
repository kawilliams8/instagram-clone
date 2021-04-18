import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Header from "../components/header.js";
import { getUserByUsername } from '../services/firebase';

export default function Profile() {
  const { username } = useParams();
  const [userExists, setUserExists] = (undefined);
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

  return (
    <>
      <Header />
    </>
  );
}
