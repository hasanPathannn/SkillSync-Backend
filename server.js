import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dbConnect from './config/mongoose.js';

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

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});