const express = require('express');
const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  // Here you would save to DB or send email
  // For now, just return the data
  res.json({ success: true, data: { name, email, subject, message } });
});

module.exports = router; 