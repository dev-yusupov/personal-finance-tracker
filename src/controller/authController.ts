import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IUser as User } from '../models/User';

const SECRET_KEY = process.env.SECRET_KEY
