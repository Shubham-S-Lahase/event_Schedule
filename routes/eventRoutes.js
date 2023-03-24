const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Event = require("../models/eventSchema");

router.use(express.json());

router.post("/v1/events", async (req, res) => {
  const { title, description, location, startTime, endTime } = req.body;
  const eventDoc = await Event.create({
    title,
    description,
    location,
    startTime,
    endTime,
  });
  res.status(201).json(eventDoc);
});

router.get('/v1/events', async(req,res) => {
    res.status(200).json(await Event.find())
})

router.get('/v1/events/:id', async(req,res) => {
    const {id} = req.params;
    const event = await Event.findById(id);
    if(event){
        res.status(200).json(event);
    }else{
        res.status(404).json("Event Not Found");
    }
})

router.delete('/v1/events/id', async(req,res) => {
    const {id} = req.params;
    const event = await Event.findByIdAndDelete(id);
    res.status(204);
})

router.put('/v1/events/:id', async(req,res) => {
    const {id} = req.params;
    const { title, description, location, startTime, endTime } = req.body;
    await Event.findOneAndUpdate(id, {title: title, description: description, location: location, startTime: startTime, endTime: endTime }, (err, result) =>{
        if(err){
            err
        }else{
            res.send(result);
        }
    })
})


