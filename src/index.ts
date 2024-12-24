import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import User from './models/userModel';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Async route handler for root
app.get('/', async (req: Request, res: Response) => {
  try {
    const newUser = new User({
      name: 'John Doe',
      email: 'test@test.com',
      password: '123456',
    });

    await newUser.save();  // Save user asynchronously
    console.log('User saved:', newUser);
    res.json(newUser.toJSON());
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
