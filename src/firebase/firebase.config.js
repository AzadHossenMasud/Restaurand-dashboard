// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBapsI9jG1ZZVIdbnnqjQNWBF0GKi4L-uk",
  authDomain: "restaurnat-dashboard.firebaseapp.com",
  projectId: "restaurnat-dashboard",
  storageBucket: "restaurnat-dashboard.appspot.com",
  messagingSenderId: "772920423369",
  appId: "1:772920423369:web:8235cff36e4f36f7216e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;