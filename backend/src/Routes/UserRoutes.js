import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { addDoc, getDoc, updateDoc, deleteDoc, doc, query, where, getDocs } from 'firebase/firestore';
import { usersCollection } from '../Connection/ConnectDatabase.js';
import authenticateUser from '../middleware/AuthMiddleware.js'; // Import middleware
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // Limit each IP to 5 requests per windowMs
    message: { success: false, message: "Too many login attempts. Please try again later." }
});

dotenv.config();
const router = express.Router();
router.use(cookieParser()); // Enable cookie parsing
const JWT_SECRET = process.env.JWT_SECRET;

// Email validation function
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30d' }); // Token expires in 30 days
};

// Signup Route
router.post('/signup', async (req, res) => {
    const { name, email, password, isAdmin = false } = req.body;

    try {
        if (!isValidEmail(email)) return res.status(400).json({ success: false, message: "Invalid email format" });

        const emailQuery = query(usersCollection, where("email", "==", email));
        const querySnapshot = await getDocs(emailQuery);

        if (!querySnapshot.empty) return res.status(400).json({ success: false, message: "Email already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userRef = await addDoc(usersCollection, { name, email, password: hashedPassword, isAdmin });

        const token = generateToken(userRef.id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            domain: process.env.COOKIE_DOMAIN || 'localhost',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
        });        

        res.json({ 
            success: true, 
            message: 'User created successfully',
            user: { id: userRef.id, name, email, isAdmin } // Send user data
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Login Route
router.post('/login', loginLimiter, async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!isValidEmail(email)) return res.status(400).json({ success: false, message: "Invalid email format" });

        const emailQuery = query(usersCollection, where("email", "==", email));
        const querySnapshot = await getDocs(emailQuery);

        if (querySnapshot.empty) return res.status(400).json({ success: false, message: "Invalid email or password" });

        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Invalid email or password" });

        const token = generateToken(userDoc.id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            domain: process.env.COOKIE_DOMAIN || 'localhost',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
        });        

        res.json({ 
            success: true, 
            message: "Login successful",
            user: { id: userDoc.id, name: userData.name, email: userData.email, isAdmin: userData.isAdmin } // Send user data
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Logout Route
router.post('/logout', (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            domain: process.env.COOKIE_DOMAIN || 'localhost',
            maxAge: 0
        });
        res.json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Logout failed" });
    }
});

// Protected Route Example (Only Authenticated Users)
router.get('/profile', authenticateUser, async (req, res) => {
    try {
        const userDoc = await getDoc(doc(usersCollection, req.user.userId));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            delete userData.password; // Exclude password
            res.json({ success: true, data: userData });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Delete Account (Authenticated User)
router.delete('/delete/:id', authenticateUser, async (req, res) => {
    try {
        const adminRef = doc(usersCollection, req.user.userId);
        const adminDoc = await getDoc(adminRef);

        if (!adminDoc.exists()) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }

        const adminData = adminDoc.data();

        // Ensure only an admin can delete users
        if (!adminData.isAdmin) {
            return res.status(403).json({ success: false, message: "Access denied. Only admin can delete users." });
        }

        const userIdToDelete = req.params.id;

        // Prevent admin from deleting themselves
        if (userIdToDelete === req.user.userId) {
            return res.status(403).json({ success: false, message: "Admin cannot delete their own account" });
        }

        const userRef = doc(usersCollection, userIdToDelete);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Delete user document from Firestore
        await deleteDoc(userRef);

        res.json({ success: true, message: "User deleted successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;