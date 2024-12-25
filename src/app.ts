import express, { Request, Response } from 'express';
import mongoose, { Schema, Document, Model } from 'mongoose';

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://root:example@mongodb:27017/')
    .then(() => {
        console.log('Connected to MongoDB');

        // Define a simple schema and model
        interface ISimple extends Document {
            message: string;
        }

        const simpleSchema: Schema = new Schema({
            message: { type: String, required: true },
        });

        const SimpleModel: Model<ISimple> = mongoose.model<ISimple>('Simple', simpleSchema);

        // Insert a simple document on every run
        SimpleModel.create({ message: 'Hello, MongoDB!' })
            .then((doc: ISimple) => {
                console.log('Document inserted:', doc);
            })
            .catch((err: any) => {
                console.error('Error inserting document', err);
            });

    }).catch((err: any) => {
        console.error('Error connecting to MongoDB', err);
    });

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});