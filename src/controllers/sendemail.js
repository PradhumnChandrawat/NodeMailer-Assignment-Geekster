const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "magali.morissette55@ethereal.email",
      pass: "7FHgKWaEc7Pc7nRGhC",
    },
  });

  console.log(req.body);

  const mailOptions = {
    from: `"Spider man " <magali.morissette55@ethereal.email>`, // Sender email address
    to: email,
    subject: subject,
    text: message,
  };

  // sendMail is inbuilt medthod given by the nodemailer server
  try {
    const emailInfo = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + emailInfo.messageId);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
};

module.exports = sendEmail;
