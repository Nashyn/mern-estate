import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log(err);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});