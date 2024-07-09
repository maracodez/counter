const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = [
  {
    email: 'user@example.com', password: 'password123'
  }
];

app.post('/api/login', (req, res) => {
  const {email, password} = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful', userData: user});
  } else {
    res.json({ success: false, message: 'Invalid email or password'});
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})