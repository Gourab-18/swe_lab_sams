// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrNocS-eHd-09ekpsGmXMPHzO1sjs9DU0",
  authDomain: "sams-8b684.firebaseapp.com",
  projectId: "sams-8b684",
  storageBucket: "sams-8b684.appspot.com",
  messagingSenderId: "305082424185",
  appId: "1:305082424185:web:7c0d63d200d7adb1b0eda8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export default app;
