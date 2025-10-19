// routes/bills.js
const express = require('express');
const router = express.Router();

const bills = []; // in-memory

// GET returns what you have
router.get('/', (_req, res) => {
  res.json(bills);
});
console.log("bill route called");

// pick fields + compute
router.post('/', (req, res) => {
  console.log('Received JSON:', req.body); // see it in terminal
  // const bill = { id: bills.length + 1, ...req.body }; 
  // bills.push(bill);
  res.status(201).json("True"); // send JSON back
});


module.exports = router;
