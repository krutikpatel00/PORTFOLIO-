// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBq44cpOB7NcGEqtNbVfevTJhQZo_J60xY",
      authDomain: "myportfolio-d7e3b.firebaseapp.com",
      projectId: "myportfolio-d7e3b",
      storageBucket: "myportfolio-d7e3b.appspot.com",
      messagingSenderId: "695916912425",
      appId: "1:695916912425:web:d8126d69e1363551b82138",
      measurementId: "G-2Z38K3XF37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const fireStore = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app)