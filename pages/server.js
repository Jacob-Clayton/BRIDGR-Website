// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5001, () => console.log("Server Running"));


//   const contactEmail = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     service: 'gmail',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS,
//     },
//   });
  
//   contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

//   router.post("/contact", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message; 
//     const mail = {
//       from: name,
//       to: "jacobeclayton@gmail.com",
//       subject: "Contact Form Submission",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "ERROR" });
//       } else {
//         res.json({ status: "Message Sent" });
//       }
//     });
//   });