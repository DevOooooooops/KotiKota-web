// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBS284_G3SitFJ2jq8wbaX3JmGuvC_BVfM',
  authDomain: 'kotikota-c1e43.firebaseapp.com',
  projectId: 'kotikota-c1e43',
  storageBucket: 'kotikota-c1e43.appspot.com',
  messagingSenderId: '463410647217',
  appId: '1:463410647217:web:802f1bdf24cf29ed6a5290',
};

const app = getApps().length ? getApps() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
