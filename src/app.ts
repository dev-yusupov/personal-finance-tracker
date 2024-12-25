import express, { Request, Response } from 'express';
import mongoose, { Schema, Document, Model } from 'mongoose';
import { connectDatabase } from './config/database';
import dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express";

import swaggerSpec from './swaggerConfiguration';
import authenticationRoutes from './routes/authenticationRoutes';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

connectDatabase();

app.use(express.json());

app.use('/api/v1/auth/', authenticationRoutes); // Use authenticationRoutes

app.use('/api/docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
