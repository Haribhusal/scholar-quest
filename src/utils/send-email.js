import nodemailer from 'nodemailer'

// Function to send verification email
exports.sendEmail = (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bhusalhari89@gmail.com',
      pass: 'grbiqmwglegpwjrn'
    }
  });

  const mailOptions = {
    from: 'noreply@',
    to: email,
    subject: 'Shisya | Email Verification',
    html: `
        
        <!DOCTYPE html>
<html>
<head>
  <title>Email Template - Online Exam</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header {
      background-color: #009688;
      color: #ffffff;
      padding: 20px;
      text-align: center;
      border-radius: 5px 5px 0 0;
    }

    .content {
      padding: 20px;
    }

    h1 {
      color: #009688;
      font-size: 24px;
      margin-top: 0;
    }

    p {
      color: #333333;
      margin-bottom: 20px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #009688;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }

    .button:hover {
      background-color: #008080;
    }

    .footer {
      background-color: #f5f5f5;
      color: #999999;
      padding: 10px;
      text-align: center;
      border-radius: 0 0 5px 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="color: #ffffff">Shisya</h1>
    </div>
    <div class="content">
      <h2>Welcome to Shisya</h2>
      <p>Please click the following button to verify your email:</p>
      <a class="button" href="http://localhost:8000/users/verify/${verificationToken}">Verify Email</a>
      <p>Thank you for joining shisya.com, Get ready to take your exams and test your knowledge.</p>
    </div>
    <div class="footer">
      <p>&copy; 2023 shisya.com, All rights reserved.</p>
    </div>
  </div>
</body>
</html>

        `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email sending failed:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};