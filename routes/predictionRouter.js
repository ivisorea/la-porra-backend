import { Router } from "express";
import { createPredictions, getAllPredictions } from "../controllers/prediction.js";

const predictionRouter = Router();

predictionRouter
    .get('/', getAllPredictions)
    .post('/', createPredictions)

export default predictionRouter