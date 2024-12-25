import express, { Request, Response } from 'express';
import mongoose, { Schema, Document, Model } from 'mongoose';
import { connectDatabase } from './config/database';

const app = express();
const port = 3000;

connectDatabase();

app.get('/', (request: Request, response: Response) => {
    response.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});