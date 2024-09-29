import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';


type BodyInfo = {
    name:string,
    email:string,
    subject:string,
    message:string
} | null

export async function POST(request: NextRequest, response:NextResponse ) {

    const data:BodyInfo = await request.json();


    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services like SendGrid, Outlook, etc.
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app password
        },
        tls: {
            rejectUnauthorized: false, // Add this line to allow self-signed certificates
        },
    });
    
    try {
        // Send email
        const mailOptions = {
          from: data?.email, // Sender's email address
          to: process.env.EMAIL_TO, // Receiver's email address
          subject: data?.subject || '',
          html: `<p><strong>Nom:</strong> ${data?.name}</p>
                 <p><strong>Email:</strong> ${data?.email}</p>
                 <p><strong>Message:</strong> ${data?.message}</p>`,
        };
          
        const info = await transporter.sendMail(mailOptions);
  
        // console.log('Email sent: ' + info.response);
        return Response.json({message: 'Email sent successfully!'});

      } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ message: 'Error sending email' });
      }

}
