
const nodemailer = require("nodemailer");

module.exports = async (user) => {
  // dummy object with user info
  const dummy = {
    username: user.username,
    name: user.name,
    email: user.email
  }
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USERNAME, // generated ethereal user
      pass: process.env.PASSWORD // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "DevWithDavid API", // sender address
    to: dummy.email, // list of receivers
    subject: "Confirmation Email", // Subject line
    text: "API", // plain text body
    html: "<b>This registration confirmation email was sent via a Node API</b>" // html body
  });
}

