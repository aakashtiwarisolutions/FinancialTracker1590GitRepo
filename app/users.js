const express = require('express');
const router = express.Router();

let nextId = 1;
const users = []; // { id, name, email }

// GET /api/v1/users
router.get('/', (_req, res) => res.json(users));
console.log();
// POST /api/v1/users
console.log("Initializing Post");
router.post('/', (req, res) => {
  const { month } = req.body || {};
  console.log('Received JSON:', req.body);
  console.log('month:', month); // prints "2025-10" for your example

  // push and return the created record
  users.push(req.body);
  res.status(201).json("True");

});

module.exports = router;  // <-- required
