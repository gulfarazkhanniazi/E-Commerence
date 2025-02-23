import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Firebase
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collections
export const usersCollection = collection(db, 'Users'); // Stores user data
export const BlogsCollection = collection(db, 'Blogs'); // Stores item data

export default db;
