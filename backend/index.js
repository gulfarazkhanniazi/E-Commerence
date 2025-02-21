import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoutes from './src/Routes/UserRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/user', UserRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});