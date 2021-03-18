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
