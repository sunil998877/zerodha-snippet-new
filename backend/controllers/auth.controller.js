import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";




const Signup = async (req,res) =>{
    try {
        const {firstName,lastName,email,password} = req.body;
         
        const existinger = await userModel.findOne({email});
        if(existinger){
          return  res.status(400).json({message : "user already exist"});
        }

        const hashedpassword = await bcrypt.hash(password,10);

        const user = await userModel.create({
            provider:"local",
            firstName,
            lastName,
            email,
            password:hashedpassword
        });
        res.status(200).json({message:"signup successfully",user})
    } catch (error) {
        res.status(500).json({message: `error.message`})
    }
};

// login
const login = async (req,res) => {
   try {
    const {email,password} = req.body;
     const User = await userModel.findOne({email});
     if (!User) {
      return  res.status(404).json({message: "user not found"});
     }

     const ismatch  = await bcrypt.compare(password,User.password);
     if(!ismatch){
        return res.status(400).json({message:"invalid cridential"});
     }

     res.status(200).json({message:"login successfully",User})
   } catch (error) {
      res.status(500).json({message:error.message});
   }

};

// callback handler

const Oath = async (profile,done) =>{
    try {
        let User = await userModel.findOne({provider:profile.provider, providerId:profile.id});
        if (!User) {
            User = await userModel.create({
                provider:profile.provider,
                providerId:profile.id,
                name:profile.displayName,
                email:profile.emaisl[0].value,
                avatar:profile.photos[0].value
            });
        }
        return done(null,User);
    } catch (error) {
        return done(error,null);
    }
};

export {login,Signup,Oath};