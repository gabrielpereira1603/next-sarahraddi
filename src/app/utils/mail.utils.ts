import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true, 
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
} as SMTPTransport.Options)

type SendEmaiDto = {
    sender: Mail.Address,
    recipients: Mail.Address[],  
    subject: string;
    message: string;
}

export const sendEmail = async (dto: SendEmaiDto) => {
    const { sender, recipients, subject, message} = dto;

    return await transport.sendMail({
        from: sender,
        to: recipients,
        subject,
        html: message,
        text: message,
    })
}