const express = require('express');
const router = express.Router();
const Admin = require('../models/AdminUser');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'himanshu@123'; // Ensure this is in your environment variables
const FetchAdmin = require('../middleware/FetchAdmin');

// Route 1: Create an admin using: POST "/api/admin/createadmin". No login required
router.post(
  '/createadmin',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    body('phone', 'Enter a valid phone number').isLength({ min: 10, max: 15 }).isMobilePhone(),
  ],
  async (req, res) => {
    try {
      // If there are validation errors, return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check if the admin exists by email or phone
      const existingAdmin = await Admin.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] });
      if (existingAdmin) {
        return res.status(400).json({ error: "Admin with the provided email or phone number already exists" });
      }

      // Generate salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new admin
      const admin = await Admin.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass, // Store hashed password
        phone: req.body.phone, // Store phone number
        role: 'admin', // Set role to admin
      });

      // Exclude sensitive data (password)
      const { password, ...adminDetails } = admin.toObject();

      const data = {
        admin: {
          id: admin.id, // Use admin ID for JWT payload
          role: admin.role, // Include role in the token payload
        },
      };

      // Generate JWT token
      const jwtToken = jwt.sign(data, JWT_SECRET);

      // Send single response
      return res.status(201).json({
        message: 'Admin created successfully',
        admin: adminDetails, // Send admin details (excluding password)
        jwtToken, // Send the auth token
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Internal server error');
    }
  }
);

// Route 2: Authenticate an admin using: POST "/api/admin/login". No login required
router.post(
  '/adminlogin',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', "Password can't be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, admin.password); // Compare password using hash password
      if (!passwordCompare) {
        return res.status(400).json({ error: "Password not matched" });
      }
      const data = {
        admin: {
          id: admin.id, // Use admin ID for JWT payload
          role: admin.role, // Include role in the token payload
        },
      };
      const jwtToken = jwt.sign(data, JWT_SECRET);
      res.json({ jwtToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error"); // This error occurs when the code or internal server has some problem
    }
  }
);

// Route 3: Get logged-in admin details using POST "/api/admin/getadmin". Login required
router.post('/getadmin', FetchAdmin, async (req, res) => {
  try {
    const adminId = req.admin.id; // Extract admin ID from the middleware (FetchAdmin)
    
    // Find the admin by their ID, excluding the password field
    const admin = await Admin.findById(adminId).select("-password");

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' }); // Admin not found in the DB
    }

    res.status(200).json(admin); // Return admin details (excluding password)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error"); // Generic server error in case of failure
  }
});

module.exports = router;
