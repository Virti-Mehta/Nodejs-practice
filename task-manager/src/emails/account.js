// google password: thdt idxa nahn crju
// require("dotenv").config();
const nodemailer = require("nodemailer");
const gmail_app_password = process.env.GMAIL_APP_PASSWORD;
let config = {
  service: "gmail",
  auth: {
    user: "virtinmehta@gmail.com",
    pass: gmail_app_password,
  },
};

let transporter = nodemailer.createTransport(config);

// Challenge: Pull JWT secret and database URL into env vars

const sendWelcomeEmail = (email, name) => {
  let message = {
    from: "virtinmehta@gmail.com",
    to: email,
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with app.`,
  };

  transporter.sendMail(message);
};

// Challenge: Send email to user on cancellation

const sendCancelEmail = (email, name) => {
  let message = {
    from: "virtinmehta@gmail.com",
    to: email,
    subject: "Sorry to see you go.",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  };

  transporter.sendMail(message);
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
