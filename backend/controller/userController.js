import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

export const loginUser = async(req, res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        if(!user){ return res.json({success:false ,message:"User Not exist"})}
        
        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){ return res.json({success:false ,message:"Email or Password Incorrect"})}

        const token= createToken(user._id)
        return res.json({success:"true",token});
    } catch (error) {
        console.log("error in login routes=>>>>> ",error);
       return res.json({success:false ,message:"regsiter Error"})
    }
};

const createToken = (id)=>{
    return jwt.sign({id} , process.env.JWT_SECRET, { expiresIn: '15d' })

} 

export const registerUser = async(req, res)=>{
    try {

        const {name , password , email} = req.body;
        const exists =await userModel.findOne({email});
        if(exists){
           return res.json({success:false ,message:"User Already exist"})
        }
        if(!validator.isEmail(email)){
           return res.json({success:false ,message:"Please enter a valid email"})
        }
        if(password.length < 6){
          return  res.json({success:false ,message:"Please enter strong password"})
        }

        const salt = await bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser =new userModel({
            name,email,password:hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
       return res.json({success:"true",token});
    } catch (error) {
        console.log("error in register routes=>>>>> ",error);
       return res.json({success:false ,message:"regsiter Error"})
    }
}