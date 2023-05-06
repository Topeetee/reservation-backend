const express = require("express");
const Hotel = require("../models/Hotels");
const {createHotel, updateHotel, deleteHotel, getHotel, getHotels} = require("../controller/hotel");

const router = express.Router();
//send
router.post("/", createHotel)
//update
router.put("/:id",updateHotel)
//delete
router.delete("/:id",deleteHotel)
//get specific hotel
router.get("/:id", getHotel)

//get all hotels
router.get("/", getHotels)

module.exports = router;