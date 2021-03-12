import React, { lazy, Suspense } from 'react';
//Suspense is a fallback/waiting component to add spinners, etc, while waiting for fetch to resolve or other async delay
//Lazy will delay loading the component code until the user navigates to path
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import UserContext from './context/user.js';
import useAuthListener from "./hooks/use-auth-listener";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>...Loading</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} exact />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
