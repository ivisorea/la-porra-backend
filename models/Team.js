import mongoose from "mongoose";

const { Schema, model } = mongoose;

const TeamSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    color: { type: String, required: true },
});

export default model("Team", TeamSchema);