# Instagram Clone

## Introduction

This project is an in-depth Instagram clone app, built in React. It follows an Advanced React tutorial from [Scrimba](https://scrimba.com/learn/photoapp). The tutorial works from a Create React App foundation, but I opted to configure this setup from scratch for the fun of it. 

## Tech Stack

- React
- React Router
- React Hooks
- Firebase Authentication
- Cloud Firestore
- Tailwind CSS
- Hero Icons
- Babel
- Webpack

## Setup

1. Clone down the repository. From the project directory, run `npm i` to install the dependencies.
1. Setup a Firebase Firestore for the project. You will need to update the collection rules to ensure read/write access. After seeding, access can be locked down with the following rule:
  ` rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read;
          allow write: if request.auth.uid != null;
        }
      }
    }`
1. The seed.js file will seed the Firebase database, but requires a src/lib/firebase.js file with your Firebase secret keys, provided in their Dashboard. The seed function will automatically run each time the build process runs if configured correctly -- comment it out once complete!
1. Create a Firebase project and enable the email/password provider. Add yourself as a user.
1. Run `npm start` to view the app in your browser.
1. Add a test user on the SignUp page, then log in to your Firebase/Firestore console to view the users collection. (Keep your test password on hand.)

## Results

### User Sign Up Page

![SignUp Page](https://github.com/kawilliams8/instagram-clone/blob/d2f4662ab9deda85546a036797a52d5f332731ad/images/screenshots/Screen%20Shot%202021-04-10%20at%2011.30.35%20AM.png)

### User Login Page

![Login Page](https://github.com/kawilliams8/instagram-clone/blob/d2f4662ab9deda85546a036797a52d5f332731ad/images/screenshots/Screen%20Shot%202021-04-10%20at%2011.30.41%20AM.png)

### View Photo Posts in Feed

![Posts in Feed](https://github.com/kawilliams8/instagram-clone/blob/ec151c9b2a7095f6832e588886dd8f407c5b0871/images/screenshots/Screen%20Shot%202021-04-11%20at%205.48.20%20PM.png)

### View Suggested Profiles to Follow

![Suggested profiles in Sidbar](https://github.com/kawilliams8/instagram-clone/blob/8c82aaf0a69ede8c57e2bec65ec90f43ecbda3d9/images/screenshots/Screen%20Shot%202021-04-17%20at%206.21.05%20PM.png)

### View a Profile with Metadata

![User Profile with Posts and Profile Metadata](https://github.com/kawilliams8/instagram-clone/blob/13733e2488b346a5804d035d31a6de62a3354bbb/images/screenshots/Screen%20Shot%202021-04-24%20at%205.57.34%20PM.png)
