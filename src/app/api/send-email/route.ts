/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    let subject = "New Evaluation Form Submission";

    let html = "";

    if (["contactus", "plans"].includes(data.usedFor)) {
      subject =
        data.usedFor === "plans"
          ? "Plan Subscribe Submission"
          : "New Contact Form Submission";
      const details: any = [];
      delete data.usedFor;
      Object.keys(data).forEach((key) => {
        if (data[key]) {
          const html = `<p style="margin: 10px 0;text-transform: capitalize;"><strong style="margin-right: 10px;" >${key.replaceAll(
            "_",
            " "
          )}:</strong>${data[key]}</p>`;
          details.push(html);
        }
      });

      html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
</head>
<body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; margin: 0; padding: 0;">

    <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
        <div style="background-color: #007BFF; color: white; padding: 10px; text-align: center; border-radius: 8px;">
            <h2 style="margin: 0; font-size: 24px;">${subject}</h2>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #ddd;">
    ${details.join("")}
            <p style="margin: 10px 0;"><strong>Submitted on:</strong>${new Date().toLocaleString()}</p>
        </div>

    </div>

</body>
</html>`;
    } else {
      const { name, email, phone, practice } = data;
      html = `
      <h1>New Evaluation Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Practice Name:</strong> ${practice}</p>`;
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "keymedsolution@gmail.com",
        pass: "ahmd alek qpfi nrse",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"KeyMed Solution" <keymedsolution@gmail.com>`,
      to: "info@keymedsolution.com",
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
