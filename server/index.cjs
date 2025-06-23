require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const contactRoute = require('./routes/contact');
const newsletterRoute = require('./routes/newsletter');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Alayna Industries Backend Running');
});

app.use('/api/contact', contactRoute);
app.use('/api/newsletter', newsletterRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 