import mongoose from "mongoose";

const { Schema, model } = mongoose;

const driverSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    number: {type: Number, required: true},
    team: {type: String, required: true},
    country: {type: String, required: true},
});

export default model ('Driver', driverSchema);