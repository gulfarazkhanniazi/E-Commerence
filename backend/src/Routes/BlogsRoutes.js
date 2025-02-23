import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { addDoc, getDoc, deleteDoc, doc, query, where, getDocs } from 'firebase/firestore';
import { BlogsCollection, usersCollection } from '../Connection/ConnectDatabase.js';
import authenticateUser from '../middleware/AuthMiddleware.js';

dotenv.config();
const router = express.Router();
router.use(cookieParser());

// Function to generate a unique slug
const generateUniqueSlug = async (title) => {
    let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    let isUnique = false;
    let counter = 1;

    while (!isUnique) {
        const slugQuery = query(BlogsCollection, where("slug", "==", slug));
        const querySnapshot = await getDocs(slugQuery);

        if (querySnapshot.empty) {
            isUnique = true;
        } else {
            slug = `${slug}-${Math.floor(1000 + Math.random() * 9000)}`; // Append random number to ensure uniqueness
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

// Route to create a new blog (Admin Only)
router.post('/add', authenticateUser, verifyAdmin, async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ success: false, message: "Title and content are required." });
        }

        const slug = await generateUniqueSlug(title);
        const newBlog = await addDoc(BlogsCollection, { title, slug, content, createdAt: new Date() });

        res.json({ success: true, message: "Blog added successfully", blogId: newBlog.id });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Route to delete a blog (Admin Only)
router.delete('/delete/:id', authenticateUser, verifyAdmin, async (req, res) => {
    try {
        const blogRef = doc(BlogsCollection, req.params.id);
        const blogDoc = await getDoc(blogRef);

        if (!blogDoc.exists()) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        await deleteDoc(blogRef);
        res.json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Route to get all blogs
router.get('/all', async (req, res) => {
    try {
        const querySnapshot = await getDocs(BlogsCollection);
        const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.json({ success: true, blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Route to get a blog by slug
router.get('/:slug', async (req, res) => {
    try {
        const slugQuery = query(BlogsCollection, where("slug", "==", req.params.slug));
        const querySnapshot = await getDocs(slugQuery);

        if (querySnapshot.empty) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        const blog = querySnapshot.docs[0].data();
        res.json({ success: true, blog });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;