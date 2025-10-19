// index.js
const express = require('express');
const app = express();

app.use(express.json());

// built-in endpoints you had
app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'my-api', timestamp: new Date().toISOString() });
});
app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Query params a and b must be numbers' });
  }
  res.json({ a, b, sum: a + b });
});
app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// mount versioned routers
const usersRouter = require('./app/users')
//('./routes/users');
const billsRouter = require('./app/bill');
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/bills', billsRouter);

// welcome
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my API',
    endpoints: [
      '/health',
      '/sum?a=2&b=3',
      'POST /echo',
      '/api/v1/users',
      '/api/v1/bills'
    ]
  });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
