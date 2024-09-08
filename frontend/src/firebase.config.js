// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAINyUeVSq5JIjmYk4oiul83DKPYs2fXVI",
  authDomain: "otp-verfication-dcc06.firebaseapp.com",
  projectId: "otp-verfication-dcc06",
  storageBucket: "otp-verfication-dcc06.appspot.com",
  messagingSenderId: "491599444759",
  appId: "1:491599444759:web:80793bb2244f70776d9552",
  measurementId: "G-1N1P21B2HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app)
export {auth};