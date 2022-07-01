import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: false },
    date: { type: Date, default: Date.now },
});

export default model("User", UserSchema);