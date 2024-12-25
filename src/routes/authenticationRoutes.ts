import express, { Request, Response } from 'express';
import { login, register, getProfile } from '../controllers/authenticationControllers';
import { protect } from '../middlewares/authenticationMiddleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);

export default router;