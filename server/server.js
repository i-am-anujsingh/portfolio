import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT =  process.env.PORT ||  3000;

// Middleware
app.use(cors());
app.use(express.json({ limits: { fileSize: 15 * 1024 * 1024 } }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//IMPORTING API ROUTES 
import messageRoutes from './routes/messageRoutes.js';
import addingRoutes from './routes/addingRoutes.js';
import fetchingRoute from './routes/fetchingRoute.js';
import authRoute from './routes/authRoutes.js';

app.use('/api/message/',messageRoutes);
app.use('/api/add/',addingRoutes);
app.use('/api/fetch/',fetchingRoute);
app.use('/api/auth/',authRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));