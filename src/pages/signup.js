import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import FirebaseContext from "../context/firebase";
import { doesUsernameExist } from "../services/firebase";
import "@babel/polyfill";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = username === "" || name === "" || password === "" || email === "";

    const handleSignup = async (event) => {
      event.preventDefault();

      const usernameExists = await doesUsernameExist(username);
      if (!usernameExists.length) {
        try {
          const createdUserResult = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

          await createdUserResult.user.updateProfile({
            displayName: username,
          });

          await firebase.firestore().collection("users").add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName: name,
            emailAddress: email.toLowerCase(),
            following: [],
            followers: [],
            dateCreated: Date.now(),
          });
          history.push(ROUTES.DASHBOARD);
        } catch (error) {
          setName("");
          setEmailAddress("");
          setPassword("");
          setError(error.message);
        }
      } else {
        setUsername("");
        setName("");
        setEmail("");
        setPassword("");
        setError("That username is already taken, please choose a different username.");
      }
    };

  useEffect(() => {
    document.title = "Instagram - Sign Up";
  }, []);

  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
          <form method="POST" onSubmit={handleSignup}>
            <input
              aria-label="Enter your username"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              autoComplete="username"
            />
            <input
              aria-label="Enter your full name"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              autoComplete="name"
            />
            <input
              aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              autoComplete="username"
            />
            <input
              aria-label="Enter your password"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="current-password"
            />
            <button
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold
                ${isInvalid && "cursor-not-allowed opacity-50"}`}
              disabled={isInvalid}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to={ROUTES.LOGIN} className="font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
