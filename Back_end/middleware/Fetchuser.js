const jwt = require('jsonwebtoken');
const JWT_SECRET = "Himanshuu@123";

const Fetchuser = (req, res, next) => {
    try {
        // Get the token from the header
        const token = req.header('auth-token');
        if (!token) {
            return res.status(403).json({ error: "Access Denied! Token is missing" });
        }

        // Verify the token
        const data = jwt.verify(token, JWT_SECRET);

        // Attach user data to the request object
        req.user = data.user;

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = Fetchuser;
