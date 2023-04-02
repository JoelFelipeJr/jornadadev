
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCBst6UeMFPtdS4kOJJfXAjDFidH5EJkSs",
  authDomain: "tiktok---jornada-5071b.firebaseapp.com",
  projectId: "tiktok---jornada-5071b",
  storageBucket: "tiktok---jornada-5071b.appspot.com",
  messagingSenderId: "501726235525",
  appId: "1:501726235525:web:f7158019c5130503fa92ec"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;