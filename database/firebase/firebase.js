import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBA8tLJfpJZ7RA6ZjCKpPX7lb5WnAHB_nQ",
  authDomain: "heal-talk-19d08.firebaseapp.com",
  projectId: "heal-talk-19d08",
  storageBucket: "heal-talk-19d08.appspot.com",
  messagingSenderId: "751159845974",
  appId: "1:751159845974:web:671dd1c7f96befb9dfc7f7",
  measurementId: "G-G9ECJX3F5Z"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);