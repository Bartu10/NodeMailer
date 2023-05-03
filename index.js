const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;
  

  const transporter = nodemailer.createTransport({
    auth: {
      user: 'timeless11tic@gmail.com',
      pass: '29042904Jbg'
    }
  });
  
  const info = await transporter.sendMail({
    from: 'timeless11tic@gmail.com',
    to: to,
    subject: subject,
    text: text
  });
  
  res.send(`Email sent: ${info.messageId}`);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});