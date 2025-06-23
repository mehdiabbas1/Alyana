const express = require('express');
const router = express.Router();

// POST /api/newsletter
router.post('/', async (req, res) => {
  const { email } = req.body;
  // Here you would save to DB or send email
  // For now, just return the data
  res.json({ success: true, data: { email } });
});

module.exports = router; 