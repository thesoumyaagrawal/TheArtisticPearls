const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider=require("../config/jwtProvider");


const createUser = async(userData)=>{
    try {
        let {firstName,lastName,email,password}=userData;

        const isUserExist = await  User.findOne({email});

        if(isUserExist){
            throw new console.error("User already exist with email : ",email);
        }

        password = await bcrypt.hash(password,8);


        const user = wait User.create({firstName,lastName,email,password});


        console.log("created user", user)
        return user;
    } catch (error) {
        throw new Error(error.message)
    }
}

const findUserById=async(userId)=>{

    try {

        const user = await User.findById({userId});
        if(!user){
            throw new error("user not found with id : ",userId);
        }
        return user;

    } catch (error) {
        throw new Error(error.message);  
    }
}


const findUserByEmail=async(email)=>{
    try {
        const user = await User.findOne({email});
        if(!user){
            throw new error("user not found with email : ",email);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);  
    }
}

const getUserProfileByToken = async(token)=>{
    try {
        const userId = jwtProvider.getUserIdFromToken(token);

        const user = await findUserById

    } catch (error) {
        
    }
}

module.exports={ createUser, findUserById, findUserByEmail }