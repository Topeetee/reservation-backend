const express = require("express");
const Hotel = require("../models/Hotels")

const router = express.Router();
//send
router.post("/",async (req,res)=>{

    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }

})
//update
router.put("/:id",async (req,res)=>{

    try {
        const savedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }

})
//delete
router.delete("/:id",async (req,res)=>{

    try {
        const savedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel deleted")
    } catch (error) {
        res.status(500).json(error)
    }

})
//get specific hotel
router.get("/:id",async (req,res)=>{

    try {
        const hotel = await Hotel.findById(req.params.id,)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }

})

//get all hotels
router.get("/",async (req,res)=>{

    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports = router;