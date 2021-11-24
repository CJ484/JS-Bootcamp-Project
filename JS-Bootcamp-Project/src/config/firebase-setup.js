import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBWZEOM4oRKshYkUiQs482Dea09NRYslQo",
  authDomain: "js914-final-project.firebaseapp.com",
  projectId: "js914-final-project",
  storageBucket: "js914-final-project.appspot.com",
  messagingSenderId: "942008992910",
  appId: "1:942008992910:web:e7598137e1e6162525f5df",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;