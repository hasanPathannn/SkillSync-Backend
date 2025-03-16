import express from 'express';
import { login, signUp } from '../controllers/userController.js';

const userRouter=express.Router();

userRouter.post('/sign-up',signUp);
userRouter.post('/login',login);

export default userRouter