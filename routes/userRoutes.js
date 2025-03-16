import express from 'express';

const userRouter=express.Router();

userRouter.get('/test',()=>{console.log("User is working")});

export default userRouter