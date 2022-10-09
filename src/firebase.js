// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeXzXF-6tkZmxV5hfiuV0LFCmCNRW6CR0",
  authDomain: "audio-store-6113e.firebaseapp.com",
  projectId: "audio-store-6113e",
  storageBucket: "audio-store-6113e.appspot.com",
  messagingSenderId: "499188680592",
  appId: "1:499188680592:web:5843288d7f9a4839195515"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
