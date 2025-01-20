const jwt = require('jsonwebtoken');
const JWT_SECRET = "himanshu@123";

const FetchAdmin = (req, res, next) => {
    try {
        const token = req.header('auth-token');
        if (!token) {
            return res.status(403).json({ error: "Access Denied! Token is missing" });
        }

        console.log("Token received:", token);

        const data = jwt.verify(token, JWT_SECRET);
        console.log("Decoded data:", data);

        if (data.admin.role !== 'admin') {
            return res.status(403).json({ error: "Access Denied! Not an admin" });
        }

        req.admin = data.admin;

        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = FetchAdmin;
