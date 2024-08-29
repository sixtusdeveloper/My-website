// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtph0nuCE5ELMtvllvhJBLat9VZvJQ7Ak",
  authDomain: "sixtusdev-b6c61.firebaseapp.com",
  projectId: "sixtusdev-b6c61",
  storageBucket: "sixtusdev-b6c61.appspot.com",
  messagingSenderId: "223409253668",
  appId: "1:223409253668:web:4b3a937b063ccf7eb617b1",
  measurementId: "G-ZSBM165VH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
