import connectDB from '../config/ConnectDatabes.js';
const mydb = await connectDB();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const login = async (req, res) => {
  const Users = mydb.collection("users");

  const { username, password } = req.body;
  
  try {
    // Find user by username
   const user = await Users.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username',
        success:false
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const isPasswordValid = await bcrypt.compare(hashedPassword, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password',
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

export {login};