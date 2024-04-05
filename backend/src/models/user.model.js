const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        default: "Customer"
    },
    mobile:{
        type: String,
    },
    address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"addresses",
    }],
    paymentInformation:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"payment_information" //abhi create nahi kiya hai lekin as a foreign key create kar diya hai 
        }
    ]
    ratings:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const User=mongoose.model("users",userSchema);
module.exports=User; 