import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import FirebaseContext from "../context/firebase";

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const user = {
    displayName: 'raphael'
  };

  return (
    <header className="h-16 bg-white border-b mb-8">
      <div className="container mx-auto max-width-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1>
              <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                <img
                  src="/images/logo.png"
                  alt="Instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray text-center flex items-center align-items">
            {/* Render the header buttons */}
            {user ? (
              <>
                <Link to={ROUTES.SIGN_UP}>
                  <button className="bg-blue-600 font-bold text-sm rounded text-white w-20 h-8">
                    temp
                  </button>
                </Link>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue w-20 h-8"
                    onClick={() => firebase.auth().signOut()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        firebase.auth().signOut();
                      }
                    }}
                  >
                    Sign Out
                  </button>
                </Link>
                <div className="flex bg-red-900 items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className="rounded-full h-8 w-8 flex"
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile picture`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-600 font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};