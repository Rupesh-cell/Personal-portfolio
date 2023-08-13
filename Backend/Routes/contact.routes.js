const express = require("express");
const router = express.Router();
const Contact = require("../models/contact.model");
const nodemailer = require("nodemailer");

router.post("/contact", async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await contact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "Khadkarupesh818@gmail.com", // Replace with your email address
      subject: "Your contact form submission",
     
      text: `
      Name: ${contact.name}
      Email: ${contact.email}
      Message: ${contact.message}
    `,
   


    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
      message: "Contact created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
