const jwt = require('jsonwebtoken');
const JWT_SECRET = "himanshu@123";

const Fetchuser = (req, res, next) => {
    try {
        const token = req.header('auth-token');
        if (!token) {
            return res.status(403).json({ error: "Access Denied! Token is missing" });
        }

        console.log("Token received:", token);

        const data = jwt.verify(token, JWT_SECRET);
        console.log("Decoded data:", data);

        req.user = data.user;

        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return res.status(401).json({ error: "Invalid Token" });
    }
};


module.exports = Fetchuser;
