const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // Used for password security
const jwt = require('jsonwebtoken'); // Used for login tokens
const User = require('../models/User'); // Connects to MongoDB

// --- SIGNUP ROUTE ---
router.post('/signup', async (req, res) => {
    // 1. Accept 'grade' and 'school' from the frontend
    const { name, email, password, grade, school } = req.body;

    try {
        // Check if user already exists in MONGODB
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Encrypt the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the new user in Database
        user = new User({
            name,
            email,
            password: hashedPassword,
            grade: grade || "Grade 6", // Default if missing
            school: school || "Govt High School"
        });

        await user.save(); // <--- SAVES TO DATABASE PERMANENTLY

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// --- LOGIN ROUTE ---
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Find the user in MONGODB
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // 2. Check Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        // 3. Create Token
        const payload = { user: { id: user.id } };
        
        // Use a secret key (can be any word)
        const secret = process.env.JWT_SECRET || "mysecrettoken";

        jwt.sign(payload, secret, { expiresIn: "1h" }, (err, token) => {
            if (err) throw err;
            
            // 4. SEND RESPONSE WITH GRADE & SCHOOL
            res.json({ 
                token, 
                user: { 
                    id: user.id, 
                    name: user.name, 
                    email: user.email, 
                    grade: user.grade,   // <--- Sending Grade!
                    school: user.school  // <--- Sending School!
                } 
            });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;