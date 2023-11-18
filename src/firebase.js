// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW_vRGzq1oCnFk46NPvC4sYB3Dg4NpFuI",
  authDomain: "cs-archive-94715.firebaseapp.com",
  databaseURL: "https://cs-archive-94715-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cs-archive-94715",
  storageBucket: "cs-archive-94715.appspot.com",
  messagingSenderId: "213846197465",
  appId: "1:213846197465:web:0484c90dce8454b2e76ac8",
  measurementId: "G-GCJWXMRLBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase();