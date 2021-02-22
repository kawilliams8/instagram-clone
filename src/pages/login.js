import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import FirebaseContext from "../context/firebase";
import "@babel/polyfill";

export default function Login() {
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === '' || email === '';

  const handleLogin = async (event) => {
    event.preventDefault();
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      } catch (error) {
        setEmail("");
        setPassword("");
        setError(error.message);
      }
  };

  useEffect(() => {
    document.title = "Instagram - Login";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5 p-10">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram app"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
          <form method="POST" onSubmit={handleLogin}>
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
            Don't have an account?{" "}
            <Link to={ROUTES.SIGN_UP} className="font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
