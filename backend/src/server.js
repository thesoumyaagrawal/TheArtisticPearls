const app = require(".");
const {connectDb} = require("./config/db");
const PORT = 5454;
app.listen(PORT, ()=>{
    await connectDb();
    console.log("ecommerce api listening on port", PORT);
})