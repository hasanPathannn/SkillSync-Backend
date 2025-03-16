import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dbConnect from './config/mongoose.js';
import userRouter from './routes/userRoutes.js';
import skillRouter from './routes/skillRoutes.js';
import sessionRouter from './routes/sessionRoutes.js';
import chatRouter from './routes/chatRoutes.js';

//setup
const app= express();
const port= process.env.PORT_URL || 5000;


//middleware
app.use(cors());
app.use(express.json());
//database
dbConnect();



app.get('/', (req,res)=>{
    res.send('Server is working')
})

app.use('/api/user',userRouter);
app.use('/api/skill',skillRouter);
app.use('/api/session',sessionRouter);
app.use('/api/chat',chatRouter);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});