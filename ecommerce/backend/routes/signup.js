// routes/signup.js
const express = require('express');
const User = require('../modals/user');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, mobile, password } = req.body;
    const newUser = new User({ email, mobile, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
