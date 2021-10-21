// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTbuYdaMtdl8NngjwY8YFabvc0ogLGZuw",
  authDomain: "weatherstation-49d72.firebaseapp.com",
  databaseURL: "https://weatherstation-49d72-default-rtdb.firebaseio.com",
  projectId: "weatherstation-49d72",
  storageBucket: "weatherstation-49d72.appspot.com",
  messagingSenderId: "617384341177",
  appId: "1:617384341177:web:c58e7436ca57d10028b568",
  measurementId: "G-VW2D58MQQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;