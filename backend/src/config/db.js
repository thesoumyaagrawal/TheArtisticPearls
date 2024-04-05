const {default: mongoose} = requires("mongoose");

const mongodbUrl ="mongodb+srv://iamsoumyaagrawal:helloworld@artisticpearls.foasiba.mongodb.net/?retryWrites=true&w=majority&appName=ArtisticPearls";

const connectDb()=>{
    return mongoose.connect(mongodbUrl);
}

module.exports={connnectDb}