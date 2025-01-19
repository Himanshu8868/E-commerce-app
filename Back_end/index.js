const connectToMongo = require('./db');
connectToMongo();    // Connect db.js file with index.js 

const express = require('express');
const app = express();
const port = 4000;  // Port open in 4000

app.use(express.json())
// Import the routes.auth module
const authRoutes = require('./routes/auth');

// Use the authRoutes for the /api/auth path
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
