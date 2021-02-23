import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import FirebaseContext from "../context/firebase";
import "@babel/polyfill";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const newUser = {
    "dateCreated" : Date.now(),
    "emailAddress" : email.toLowerCase(),
    "followers" : [],
    "following" : [],
    "fullName" : name,
    "username" : username.toLowerCase()
  }

  const isInvalid = username === "" || name === "" || password === "" || email === "";

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().createUser(newUser);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setName("");
      setEmail("");
      setPassword("");
      setUsername("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Instagram - Sign Up";
  }, []);

  return <p>Hello from Signup</p>;
}
