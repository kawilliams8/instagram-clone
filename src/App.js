import React, { lazy, Suspense } from 'react';
//Suspense is a fallback/waiting component to add spinners, etc, while waiting for fetch to resolve or other async delay
//Lazy will delay loading the component code until the user navigates to path

const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  return (
  <Suspense fallback={<p>...Loading</p>}>
    <p>Loaded content here.</p>
  </Suspense>
  )
}
