/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import nodemailer from 'nodemailer';
import {SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USERNAME , SMTP_API_KEY} from './env';
import { MailOptions } from 'nodemailer/lib/ses-transport';

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    // service: SMTP_HOST,
    secure: false,
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
        ciphers:'SSLv3'
    },
    connectionTimeout: 10000, 
    dnsTimeout : 3000,
    socketTimeout : 3000,
    greetingTimeout : 3000
})



export default transporter; 