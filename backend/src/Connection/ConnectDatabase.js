import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

// Ensure Firebase config is properly parsed from environment variables
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userCollection = collection(db, 'E-commerence');

export default userCollection;
