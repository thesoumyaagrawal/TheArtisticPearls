const userService = require("../services/user.service");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.service");


const register = async(req,res)=>{
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        //as soon as the user will be created a cart service for the user will also be created
        await cartService.createCart(user);

        return res.status(200).send({jwt,message:"register success"})
        
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const login = async(req,res)=>{
    const {password,email} = req.body;
    try {
        
        const user = await userService.getUserByEmail(email);

        if(!user){
            return res.status(404).send({message: 'user not found with email : ',email})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).send({message: "Invalid Password..."})
        }

        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({jwt, message: "Login Success"});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports={register, login};