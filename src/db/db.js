
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDqGeQLOfLeMiKNEQrQ49wDz1_T7roSmF8",
  authDomain: "coderhouse-eecomerce-dylang.firebaseapp.com",
  projectId: "coderhouse-eecomerce-dylang",
  storageBucket: "coderhouse-eecomerce-dylang.appspot.com", 
  messagingSenderId: "511932505570",
  appId: "1:511932505570:web:3a6c9a0455366d95d6edbb",
  measurementId: "G-KLLM5VBJTQ",
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;