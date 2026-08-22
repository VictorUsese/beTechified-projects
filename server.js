import express from 'express';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/register') {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  }
  next();
});

app.get('/', (req, res) => {
  res.send('My Week 2 API!');
});

app.get('/user/id', (req, res) => {
  const user = {
    id: 1,
    name: 'Victor Usese',
    age: 28
  };
  res.json({ user });
});

// app.get('/users', (req, res) => {
//   const users = [
//     { id: 1, name: 'Victor Usese', age: 28 }
//   ];
//   res.json({ users });
// });

app.post('/register', (req, res) => {
  const data = req.body;
  res.json({ message: 'User registered', data });
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
