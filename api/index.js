const express = require("express");
require('dotenv').config(); 
const mongoose = require ("mongoose");
const AuthRoute = require("./routes/auth");
const RoomsRoute = require("./routes/rooms");
const HotelsRoute = require("./routes/hotels");
const UsersRoute = require("./routes/users");
const cookieParser = require("cookie-parser");
 
const app = express();

const connect = async()=>{
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("connected to my mongoDb")
    }catch(err){
        throw err;
    }
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


app.use( cookieParser());
app.use(express.json());
app.use("/api/auth",AuthRoute);
app.use("/api/hotels",HotelsRoute);
app.use("/api/rooms",RoomsRoute);
app.use("/api/users",UsersRoute); 


app.get("/", (req,res)=>res.send("working"))
app.use((err,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "somethine went wrong"
    return res.status(errorStatus).json({
        success:false,  
        
        status:errorStatus,
        messgae: errorMessage,
        stack: err.stack
      })
})
app.listen(3000, ()=>{ connect() 
    console.log("connected to the port")});