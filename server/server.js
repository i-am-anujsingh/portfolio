import express from 'express';
import path from "path";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
const PORT =   3000;

// Middleware
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!!')
})

//IMPORTING API ROUTES 
import messageRoutes from './routes/messageRoutes.js';
import addingRoutes from './routes/addingRoutes.js';
import fetchingRoute from './routes/fetchingRoute.js';
import authRoute from './routes/authRoutes.js';
import deletingRoute from './routes/deletingRoutes.js';
import updatingRoute from './routes/updatingRoutes.js';

app.use('/api/message/',messageRoutes);
app.use('/api/add/',addingRoutes);
app.use('/api/fetch/',fetchingRoute);
app.use('/api/auth/',authRoute);
app.use('/api/update/',updatingRoute);
app.use('/api/delete/',deletingRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));