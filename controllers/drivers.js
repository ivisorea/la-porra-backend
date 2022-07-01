import asyncHandler from "../middleware/asyncHandler.js";
import Driver from "../models/Driver.js";

//Get all drivers
export const getAllDrivers = asyncHandler(
    async(req, res, next) => {
        const drivers = await Driver.find().populate('team', 'name color');
        res.json(drivers);
    });

//Create a new driver
export const createDriver = asyncHandler(async(req, res) => {
    const {
        body,
    } = req;
    const newDriver = await Driver.create({
        ...body
        });
        res.status(201).json(newDriver);
    });

//Get a single driver
export const getDriver = asyncHandler(async(req, res, next) => {
    const {
        params: { id }
    } = req;
    const driver = await Driver.findById(id);
    if (!driver) throw new ErrorResponse(`driver with id of ${id} not found`, 404);
    res.json(driver);
});