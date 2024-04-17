import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCkTBkYnBIO2CmW5ZPsFL1fSi6P9iXSx2k",
  authDomain: "monshop-7c4e5.firebaseapp.com",
  projectId: "monshop-7c4e5",
  storageBucket: "monshop-7c4e5.appspot.com",
  messagingSenderId: "198167234491",
  appId: "1:198167234491:web:23367147d460ec25f3269e",
  measurementId: "G-MR90EM940Z"
};

// Initialize Firebase
  export const app = firebase.initializeApp(firebaseConfig);

const db  =  app.firestore()
export const storage = getStorage(app);
  export default db;


