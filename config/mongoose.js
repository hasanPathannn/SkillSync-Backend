import mongoose from "mongoose";

const dbConnect=async(req,res)=>{
    try{
        mongoose.set({"strictQuery": false});

        mongoose.connection.on('connected',()=> console.log('database connected'))
    
        await mongoose.connect(`${process.env.MONGODB_URI}/SkillSync`)

    }catch{
        console.log("database connection failed")
    }
}

export default dbConnect