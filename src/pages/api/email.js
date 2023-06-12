import Nodemailer from "nodemailer";

function formatNotificationEmail(enquiryDetails) {
  return `
        Portfolio site.

        Details:
        -------------------------------
        Name:         ${enquiryDetails.name}
        Email:        ${enquiryDetails.email}
        Message:      ${enquiryDetails.message}
        `;
}

function formatThankYouEmail(enquiryDetails) {
  return `Hello ${enquiryDetails.name}!
Thank you for contacting me! 

I will read your message and reply as soon as possible.

    -------------------------------
    Name:         ${enquiryDetails.name}
    Email:        ${enquiryDetails.email}
    Message:      ${enquiryDetails.message}


Best regards,
Alexandros Kangkelidis
+357 99 717117
www.kangkelidis.com
    `;
}

export default async function handler(req, res) {

  const transporter = Nodemailer.createTransport({
    host: "smtp.zoho.eu",
    secure: true,
    port: 465,
    auth: {
      user: "alexandros@kangkelidis.com",
      pass: process.env.ZOHO_PASS
    },
  });

  const notificationMailOptions = {
    from: "alexandros@kangkelidis.com",
    to: "kangkelidis@gmail.com",
    subject: `Portfolio - ${JSON.parse(req.body).name}`,
    text: formatNotificationEmail(JSON.parse(req.body)),
  };

  const thankYouMailOptions = {
    from: "alexandros@kangkelidis.com",
    to: JSON.parse(req.body).email,
    subject: "Thank You!",
    text: formatThankYouEmail(JSON.parse(req.body)),
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(notificationMailOptions, (error, info) => {
      if (error) {
        return console.error(error);
      }
      console.log(info);
    });
    transporter.sendMail(thankYouMailOptions, (error, info) => {
      if (error) {
        return console.error(error);
      }
      console.log(info);
    });

  })
  .then(res.status(200).json({ status: "ok" }))


}
