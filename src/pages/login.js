import React from "react";

export default function Login() {
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen p-10">
      <div className="flex w-3/5">
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
      </div>
    </div>
  );
}
