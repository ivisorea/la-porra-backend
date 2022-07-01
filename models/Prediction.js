import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PredictionSchema = new Schema({
    driver: {type: Schema.Types.ObjectId, required: true, ref: 'Driver' },
    position: {type: Number, required: true},
    user: {type: String, required: true},
    grandPrix: {type: String, required: true},
    date: {type: Date, default: Date.now},
    season: {type: Number, required: true}
});

export default model("Prediction", PredictionSchema);
    
