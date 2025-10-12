// index.js
const express = require('express');
const app = express();

// middleware to parse JSON bodies
app.use(express.json());

// GET /health -> quick health check
app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'my-api', timestamp: new Date().toISOString() });
});

// GET /sum?a=2&b=3 -> simple calculator using query params
app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const c = "Aakash"
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Query params a and b must be numbers' });
  }
  res.json({ a, b, sum: a + b,c });
});

// POST /echo -> send JSON body, it echoes it back
app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API', endpoints: ['/health', '/sum?a=2&b=3', 'POST /echo'] });
});

// start server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
