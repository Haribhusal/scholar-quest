// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, message } = req.body;

            // Create a transporter using your SMTP settings (replace with your email provider's settings)
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com', // Replace with your SMTP host
                port: 587, // Replace with your SMTP port
                secure: false, // Set to true if your SMTP provider requires a secure connection
                auth: {
                    user: 'bhusalhari89@gmail.com', // Replace with your email address
                    pass: 'grbiqmwglegpwjrn', // Replace with your email password
                },
            });

            // Compose the email message
            const mailOptions = {
                from: 'Scholar Quest Education Network', // Replace with your email address
                to: 'bhusalhari89@gmail.com', // Replace with the recipient's email address
                subject: 'Contact Message from Scholar Quest Website',
                text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
            };

            // Send the email
            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
