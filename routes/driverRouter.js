import { Router } from "express";
import { createDriver, getAllDrivers, getDriver } from "../controllers/drivers.js";

const driverRouter = Router();

driverRouter
    .get('/', getAllDrivers)
    .get('/:id', getDriver)
    .post('/', createDriver)

export default driverRouter;
