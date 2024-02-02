const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// SQLite Database Setup
const db = new sqlite3.Database('travelbuddy.db', (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    } else {
      console.log('Connected to the database');
      
      // Create Users Table
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE,
          password TEXT
        )
      `);
    }
  });

// Serve static files (including index.html) from the 'public' directory
app.use(express.static('public'));

/*// Express Routes
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into the database
  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(201).json({ message: 'User created successfully' });
  });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Retrieve user from the database
  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  });
});*/
// Signup route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    // Implement your signup logic (e.g., insert into database)
    // ...

    res.status(201).json({ message: 'User created successfully' });
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Implement your login logic (e.g., check credentials)
    // ...

    res.status(200).json({ message: 'Login successful' });
});

// Profile route (to get user profile)
app.get('/profile', async (req, res) => {
    // Implement your logic to retrieve user profile data
    // ...

    // For example, you can send dummy data for testing
    const userProfile = {
        id: 1,
        email: 'test@example.com',
        posts: ['Post 1', 'Post 2'],
    };

    res.json(userProfile);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
