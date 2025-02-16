require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

// Email Endpoint
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter=nodemailer.createTransport({
    host: "smtp.eu.mailgun.org",
    port: 587,
    auth: {
      user: process.env.MAILGUN_USER,
      pass: process.env.MAILGUN_PASS,
    },
  }); 

  const mailOptions = {
    from: `Union Rights <${process.env.MAILGUN_USER}>`,
    to: "niek.christenhuls@gmail.com", // Change this to the receiver's email
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  await transporter.sendMail(mailOptions);
  try {
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Serve React App
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
