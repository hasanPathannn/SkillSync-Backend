import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const signUp=async(req,res)=>{
    try {
        const {email,password,name}=req.body;

        if(!email || !password || !name){
            return res.status(400).json({success:false,message:"Please enter all field"});
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({success:false,message:"Invalid email"});
        }

        if(password.length<8){
            return res.status(400).json({success:false,message:"Password must be at least 8"})
        }

        const salt=await bcrypt.genSalt(10);
        const hashPass=await bcrypt.hash(password,salt);

        const userData={
            name,
            email,
            password:hashPass
        }

        if(userData){
            const user=await User.create(userData);
            if(user){
                const token= jwt.sign({id:user._id},process.env.JWT_SECRET);
                return res.status(201).json({success:true,message:"User created successfully",token});
            }
        }


    } catch (error) {
        return res.json({status:false,message:error.message});
    }
}

const login=async(req,res)=>{

   try {
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({success:false,message:"Please enter all field"});
    }

    const user = await User.findOne({email:email});

    if(!user){
        return res.status(400).json({success:false,message:"Invalid email"});
    }

    const check= await bcrypt.compare(password,user.password);

    if(check){
        const token= jwt.sign({id:user._id},process.env.JWT_SECRET);
        return res.status(201).json({success:true,token,message:"Login Successful"});
    }
    else{
        return res.status(400).json({success:false,message:"Invalid password"});
    }
    
   } catch (error) {
    return res.json({status:false,message:error.message});
   }

}

export {signUp,login}