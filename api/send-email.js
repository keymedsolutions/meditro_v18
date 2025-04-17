const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const SmtpEmail = process.env.NEXT_EMAIL_ADDRESS;
  const SmtpPassword = process.env.NEXT_EMAIL_PASSWORD;
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger SMTP server
      port: 587, // Use 465 for SSL, 587 for TLS
      secure: false, // true for SSL, false for TLS
      auth: {
        user: SmtpEmail,
        pass: SmtpPassword, // Your Hostinger email password
      },
      tls: {
        rejectUnauthorized: false, // Prevents SSL issues
      },
    });

    let subject = "New Evaluation Form Submission";
   
    let html = "";
    if (req.body.usedFor === "contactus") {
      subject = "New Contact Form Submission";
      const details = [];
      delete req.body.usedFor;
      Object.keys(req.body).forEach((key) => {
        const html = `<p style="margin: 10px 0;"><strong>${key}:</strong>${req.body[key]}</p>`;
        details.push(html);
      });

      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 0;">

    <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
        <div style="background-color: #007BFF; color: white; padding: 10px; text-align: center; border-radius: 8px;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #ddd;">
    ${details.join("")}
            <p style="margin: 10px 0;"><strong>Submitted on:</strong>${new Date().toLocaleString()}</p>
        </div>

    </div>

</body>
</html>`;
    } else {
      const { name, email, phone, practice } = req.body;
      html = `
      <h1>New Evaluation Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Practice Name:</strong> ${practice}</p>`;
    }
    const mailOptions = {
      from: `"KeyMed Solution" <${SmtpEmail}>`, // Sender name & email
      to: "kishan@yopmail.com", // Recipient email
      subject: subject,
      html: html,
    };
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: "SUCCESS" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(200).json({ status: "FAILURE", error });
    }
  }
}
