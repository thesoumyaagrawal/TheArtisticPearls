const express=require("express");

const cors = require("cors");

const mongoose=require("mongoose")

const app=express();

const url="mongodb+srv://iamsoumyaagrawal:iKvMiAYgqyiSKiJk@cluster0.63xmfi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    return res.status(200).send({message : "Welcome to The artistic Pearls", status:true});
})

const authRouters = require("./routes/auth.route")
app.use("/auth",authRouters);

const userRouters = require("./routes/user.route")
app.use("/users",userRouters);

const port = process.env.PORT || 5000;

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

con.on('open',function(){
    console.log("connected successfuly");
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})

module.exports=app;