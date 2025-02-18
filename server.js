const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt'); // Add bcrypt for password hashing

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost', // or '127.0.0.1'
    user: 'root', // Your MySQL username
    password: 'Abercrombie22!!!', // Your MySQL root password
    database: 'trivia_app' // Name of the database you created
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Query to check if the user exists
    const query = 'SELECT * FROM Users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }

        if (results.length === 0) {
            // No user found with the given email
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        } else {
            // Validate the hashed password
            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password); // Use bcrypt to compare
            if (isMatch) {
                res.json({ success: true, message: 'Login successful', user });
            } else {
                res.status(401).json({ success: false, message: 'Invalid email or password' });
            }
        }
    });
});



// Test Route
app.get('/', (req, res) => {
    res.send('Server is connected to the database!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
