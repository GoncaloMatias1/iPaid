import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxdzZQvulf3FHnmq2I7NVr_RoGevauheo",
  authDomain: "ipaid-639a1.firebaseapp.com",
  projectId: "ipaid-639a1",
  storageBucket: "ipaid-639a1.firebasestorage.app",
  messagingSenderId: "79353841187",
  appId: "1:793538411879:web:59400cd2c93daca4bd03c2",
  measurementId: "G-CZBOW2Y96V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);