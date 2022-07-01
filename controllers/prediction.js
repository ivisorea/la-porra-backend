import asyncHandler from "../middleware/asyncHandler.js";
import Prediction from "../models/Prediction.js";

//Get all predictions
export const getAllPredictions = asyncHandler(async(req, res, next) => {
    const predictions = await Prediction.find().populate('driver');
    res.json(predictions);
    })

//Create a new prediction
export const createPredictions = asyncHandler(async(req, res) => {
    const {
        body,
    } = req;
    const newPrediction = await Prediction.create({
        ...body,
    });
    res.status(201).json(newPrediction);
})