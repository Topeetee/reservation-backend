const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello, this is from authentication");

})
module.exports = router;