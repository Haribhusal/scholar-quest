// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const { name, email, message } = req.body;

        // Create a Nodemailer transporter with the SMTP configuration from .env
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "bhusalhari89@gmail.com",
                pass: "lblkhnwfnkgqazou",
            },
        });

        // Email message
        const mailOptions = {
            from: email,
            to: 'bhusalhari89@gmail.com', // Replace with the recipient's email address
            subject: `Message from ${name}`,
            text: message,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong while sending the email.' });
    }
}
