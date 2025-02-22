import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cookieParser from "cookie-parser";

dotenv.config();
const router = express.Router();
router.use(cookieParser());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  secure: true,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
  }
});

// Contact route with HTML email design
router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  if (!firstName || !lastName || !email || !phoneNumber || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const mailOptions = {
      from: email,
      to: process.env.SMTP_USER, // Send to admin
      subject: "New Contact From E-Commerence Contact Form",
      html: `
      <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
        <h2 style="text-align: center; color: #333;">📩 New Contact Message</h2>
        <hr style="border: none; border-top: 1px solid #ddd;">
        
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #fff; border-radius: 5px; border-left: 5px solid #007bff;">
          <p style="font-size: 16px; color: #555;">"${message}"</p>
        </div>
        
        <p style="margin-top: 20px; font-size: 14px; color: #777;">This message was sent from your website contact form.</p>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

export default router;
