const connectToMongo = require('./db');
connectToMongo(); // Connect db.js file with index.js

const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const port = 4000; // Port open in 4000

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: ['http://localhost:3000', 'https://kwth557t-3000.inc1.devtunnels.ms'], // Allow requests from these origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // Include cookies or authentication headers
}));

// Import the routes.auth module
const authRoutes = require('./routes/auth');

// Use the authRoutes for the /api/auth path
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
