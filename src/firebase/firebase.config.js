// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeJEBgHGyrCDVTSykSyR1TguuQVBbqVlQ",
  authDomain: "react-dragon-news-auth-deb17.firebaseapp.com",
  projectId: "react-dragon-news-auth-deb17",
  storageBucket: "react-dragon-news-auth-deb17.appspot.com",
  messagingSenderId: "402795770071",
  appId: "1:402795770071:web:826a72491c8449bbbb4092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;