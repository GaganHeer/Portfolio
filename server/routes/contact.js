const router = require('express').Router();
const nodemailer = require('nodemailer');

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
});
  
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to Send');
    }
});

router.route('/contact').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 

    const mail = {
      from: name,
      to: process.env.receiver,
      subject: 'Portfolio Contact Form',
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: 'ERROR' });
      } else {
        res.json({ status: 'Message Sent' });
      }
    });
});

module.exports = router;