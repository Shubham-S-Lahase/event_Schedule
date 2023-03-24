const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {type: String, required: true,},
    description: {type: String, required: true},
    location: {type: String, required: true},
    startTime: {type: String, required: true},
    endTime: {type: String, required: true}
})

const eventModel = mongoose.Model('Events', eventSchema);

module.exports = eventModel;