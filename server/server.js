const express =  require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./database/ConnectDatabes');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://npgctechfest.vercel.app"],
  credentials: true
}));

app.use(express.json({ limits: { fileSize: 15 * 1024 * 1024 } }));

connectDB(); //CONNECTING TO DATABASE

//IMPORTING API ROUTES 
const messageRoutes = require('./routes/messageRoutes.js');
const addingRoutes = require('./routes/addingRoutes.js');
const fetchingRoute = require('./routes/fetchingRoute.js');
const authRoute = require('./routes/authRoutes.js');

app.use('/api/message/',messageRoutes);
app.use('/api/add/',addingRoutes);
app.use('/api/fetch/',fetchingRoute);
app.use('/api/auth/',authRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));