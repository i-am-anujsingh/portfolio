const Users = require('../models/userModel.js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find user by username
    const user = await Users.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password',
        success:false
      });
    }

    // Compare plain password with hashed one using bcryptjs
    const isPasswordValid = (password == user.password ? true:false);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password',
        success:false,
      });
    }

    // Sign a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    // Send success response
    res.status(200).json({
      message: 'Login successful',
      token:token,
      user:user,
      success:true,
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = login;