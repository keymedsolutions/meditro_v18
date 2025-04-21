// app/_actions/sendEmail.ts
"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (formData: FormData) => {
  const data: Record<string, string> = {};
  formData.forEach((value, key) => {
    data[key] = value.toString();
  });

  const subject = "New Contact Form Submission";
  const details: string[] = [];

  Object.entries(data).forEach(([key, value]) => {
    if (key !== "usedFor") {
      details.push(`<p><strong>${key}:</strong> ${value}</p>`);
    }
  });

  const html = `
    <html><body>
    <h2>${subject}</h2>
    ${details.join("")}
    <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    </body></html>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "info@digitechnobytes.com",
      pass: "DigiA1b29099@@",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: `"KeyMed Solution" <info@digitechnobytes.com>`,
      to: "kishan@yopmail.com",
      subject,
      html,
    });

    return { success: true };
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return { success: false };
  }
};
