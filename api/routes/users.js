const express = require("express");
const { updateUser, deleteUser, getUser, getUsers } = require("../controller/user");

const router = express.Router();

router.get("/checkauthentication",verifytoken, (req,res,next)=>{
    res.send("hello user u sre authenticated")
})
//update
router.put("/:id",updateUser)
//delete
router.delete("/:id",deleteUser)
//get specific hotel
router.get("/:id", getUser)

//get all hotels
router.get("/", getUsers)
module.exports = router;