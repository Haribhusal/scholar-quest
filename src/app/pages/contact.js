"use client"
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the form data to the server API route
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log(response)

            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
                // Optionally, show a success message to the user or redirect to a thank you page.
                // You can handle this based on the response from the server.
            } else {
                console.error(data.error);
                // Handle errors or show an error message to the user.
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle any unexpected errors.
        }
    };

    // TODO: Send the form data to the server and handle email sending
    // You can use an API route to handle form submission and send an email from there.
    // Make sure to include the Nodemailer logic in the server-side code.


    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}
export default Contact;
