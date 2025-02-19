import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import UserRoutes from './src/Routes/UserRoutes.js'
import cookieParser from 'cookie-parser';

const app = express()
const port = process.env.PORT || 3000

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/user', UserRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})