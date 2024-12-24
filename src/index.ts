import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, World! Express.js with TypeScript</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});