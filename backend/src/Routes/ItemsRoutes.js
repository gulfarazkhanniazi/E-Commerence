import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { addDoc, getDoc, deleteDoc, updateDoc, doc, query, where, getDocs } from 'firebase/firestore';
import { ItemsCollection, usersCollection } from '../Connection/ConnectDatabase.js';
import authenticateUser from '../middleware/AuthMiddleware.js';

dotenv.config();
const router = express.Router();
router.use(cookieParser());

// Function to generate a unique slug for items
const generateUniqueSlug = async (title) => {
    let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    let isUnique = false;

    while (!isUnique) {
        const slugQuery = query(ItemsCollection, where("slug", "==", slug));
        const querySnapshot = await getDocs(slugQuery);

        if (querySnapshot.empty) {
            isUnique = true;
        } else {
            slug = `${slug}-${Math.floor(1000 + Math.random() * 9000)}`; // Append random number for uniqueness
        }
    }

    return slug;
};

// Middleware to check if the user is an admin
const verifyAdmin = async (req, res, next) => {
    try {
        const adminRef = doc(usersCollection, req.user.userId);
        const adminDoc = await getDoc(adminRef);

        if (!adminDoc.exists()) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }

        const adminData = adminDoc.data();
        if (!adminData.isAdmin) {
            return res.status(403).json({ success: false, message: "Access denied. Only admin can perform this action." });
        }

        next();
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Route to add a new item (Admin Only)
router.post('/add', authenticateUser, verifyAdmin, async (req, res) => {
    try {
        const { title, description, price, stock, category, images } = req.body;

        if (!title || !description || !price || !stock || !category || !images || images.length === 0) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        if (price < 0 || stock < 0) {
            return res.status(400).json({ success: false, message: "Price and stock must be positive values." });
        }

        const slug = await generateUniqueSlug(title);

        const newItem = await addDoc(ItemsCollection, { 
            title, 
            slug, 
            description, 
            price, 
            stock, 
            category, 
            images, 
            createdAt: new Date() 
        });

        res.json({ success: true, message: "Item added successfully", itemId: newItem.id });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Route to delete an item (Admin Only)
router.delete('/delete/:id', authenticateUser, verifyAdmin, async (req, res) => {
    try {
        const itemRef = doc(ItemsCollection, req.params.id);
        const itemDoc = await getDoc(itemRef);

        if (!itemDoc.exists()) {
            return res.status(404).json({ success: false, message: "Item not found" });
        }

        await deleteDoc(itemRef);
        res.json({ success: true, message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Route to get all items
router.get('/all', async (req, res) => {
    try {
        const querySnapshot = await getDocs(ItemsCollection);
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.json({ success: true, items });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Route to get an item by slug
router.get('/:slug', async (req, res) => {
    try {
        const slugQuery = query(ItemsCollection, where("slug", "==", req.params.slug));
        const querySnapshot = await getDocs(slugQuery);

        if (querySnapshot.empty) {
            return res.status(404).json({ success: false, message: "Item not found" });
        }

        const item = querySnapshot.docs[0].data();
        res.json({ success: true, item });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;