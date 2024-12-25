import { Request, Response, RequestHandler } from "express";
import User from '../models/userModel';
import generateToken from "../utils/generateToken";

export const register: RequestHandler = async (request: Request, response: Response): Promise<void> => {
    const { username, email, password } = request.body;

    try {
        const existingUser = await User.findOne({ email }); // Filter users by email

        // Check if the user already exists
        if (existingUser) {
            response.status(400).json({ message: 'User already exists' });
            return;
        }

        const user = new User({ username, email, password });
        await user.save(); // Save the user to the database

        response.status(201).json({
            id: user._id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            token: generateToken(user._id as string),
        });
        
    } catch (error: any) {
        response.status(500).json({ message: 'Something went wrong' });
        console.error(error.message);
    }
};

export const login: RequestHandler = async (request: Request, response: Response): Promise<void> => {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({ email }); // Filter users by email

        if (!user || !(await user.comparePassword(password))) {
            response.status(401).json({ message: 'Invalid email or password' });
        }

        response.status(200).json({
            id: user?._id,
            username: user?.username,
            email: user?.email,
            token: generateToken(user?._id as string),
        })
    } catch (error: any) {}

};