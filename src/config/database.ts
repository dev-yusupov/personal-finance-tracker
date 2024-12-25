/*

Database configuration file for MongoDB

*/

import mongoose, { Schema, Document, Model } from 'mongoose';

// MongoDB connection
export const connectDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://root:example@mongodb:27017/finance?authSource=admin');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
}