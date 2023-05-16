const express = require("express");
const { updateUser, deleteUser, getUser, getUsers } = require("../controller/user");
const {verifyToken,verifyUser, verifyAdmin} = require("../utils/verifyToken");
const createError = require("../utils/error")

const router = express.Router();

// router.get("/checkauthentication",verifyToken, (req,res,next)=>{
//     res.send("hello user u sre authenticated")
// })
// router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
//     res.send("hello user u are authenticated and can delete your account")
// })
// router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
//     res.send("hello admin u are authenticated and can delete all account")
// })
//update 
router.put("/:id", verifyUser,updateUser)
//delete
router.delete("/:id", verifyUser,deleteUser)
//get specific hotel
router.get("/:id", verifyUser, getUser)

//get all hotels
router.get("/", verifyAdmin,getUsers)
module.exports = router;