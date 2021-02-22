import React from "react";

export default function Login() {
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen p-10">
      <div className="flex w-3/5 p-6 m-2">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram app"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-center w-full">
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="mt-2 w-6/12 mb-4"
          />
        </h1>
        <form method="POST">
          <input
            aria-label="Enter your email address"
            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
            type="text"
            placeholder="Email address"
          />
          <input
            aria-label="Enter your password"
            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white w-full rounded h-8 font-bold`}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
