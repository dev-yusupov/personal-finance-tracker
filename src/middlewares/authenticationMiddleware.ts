import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    user?: string;
    userId?: string;
};

export const protect = (request: AuthenticatedRequest, response: Response, next: NextFunction): void => {
    const token = request.header('Authorization');

    if (!token) {
        console.log('No token provided');
        response.status(401).json({ message: 'Unauthorized' });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        request.user = (decoded as { id: string }).id;
        next();
    } catch (error : any) {
        console.log('Token verification failed:', error.message);
        response.status(401).json({ message: 'Unauthorized' });
    }
};

export { AuthenticatedRequest };