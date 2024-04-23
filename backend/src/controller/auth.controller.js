const userService = require("../services/user.service");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.service");
const User = require("../models/user.model");


const register = async(req,res)=>{
    // try {
    //     const user = await userService.createUser(req.body);
    //     const jwt = jwtProvider.generateToken(user._id);

    //     //as soon as the user will be created a cart service for the user will also be created
    //     await cartService.createCart(user);

    //     return res.status(200).send({jwt,message:"register success"})
        
    // } catch (error) {
    //     return res.status(500).send({error:error.message});
    // }

    const {name,email,password}=req.body;
    let existingUser;
    try{
        existingUser= await User.findOne({email});
    } 
    catch(err)
    {
        return console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    const user = new User({
        name,
        email,
        password
    });
    try{
        await user.save();
    }
    catch(err){
        return console.log(err);
    }
    await cartService.createCart(user);
    return res.status(201).json({user});
}

// const login = async(req,res)=>{
//     const {password,email} = req.body;
//     try {
        
//         const user = await userService.getUserByEmail(email);

//         if(!user){
//             return res.status(404).send({message: 'user not found with email : ',email})
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if(!isPasswordValid){
//             return res.status(401).send({message: "Invalid Password..."})
//         }

//         const jwt = jwtProvider.generateToken(user._id);
//         return res.status(200).send({jwt, message: "Login Success"});
//     } catch (error) {
//         return res.status(500).send({error:error.message});
//     }
// }

const login = async(req,res,next)=>{
    console.log(req);
    const { email,password } = req.body;
    let existingUser;
    try{
        existingUser= await User.findOne({email});
    } 
    catch(err)
    {
        return console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"couldn't find user with this email"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"password doesn't match"});
    }
    return res.status(200).json({message:"logged in successfully", user: existingUser});
}

module.exports={register, login};