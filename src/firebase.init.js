// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWVoXJ2DLbFdOanrEVctbmk3ISbmdLJmI",
  authDomain: "genius-car-services-1a112.firebaseapp.com",
  projectId: "genius-car-services-1a112",
  storageBucket: "genius-car-services-1a112.appspot.com",
  messagingSenderId: "156703386255",
  appId: "1:156703386255:web:280af801a9378e4ec85efa"
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;