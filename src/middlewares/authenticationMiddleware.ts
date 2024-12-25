import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    user?: string;
};

export const protect = (request: AuthenticatedRequest, response: Response, next: NextFunction) => {
    const token = request.header('Authorization');

    if (!token) {
        return response.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        request.user = (decoded as { id: string }).id;
        next();
    } catch (error) {
        return response.status(401).json({ message: 'Unauthorized' });
    }
};