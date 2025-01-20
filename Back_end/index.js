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
    origin: 'http://localhost:3000', // Allow requests from this origin
}));

// Import the routes.auth module
const authRoutes = require('./routes/auth');

// Use the authRoutes for the /api/auth path
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
