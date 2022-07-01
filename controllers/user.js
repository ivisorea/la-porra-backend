import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/User.js";

//Get all users
export const getAllUsers = asyncHandler(async(req, res) => {
    const users = await User.find();
    res.json(users);
})

//Create a new user
export const createUser = asyncHandler(async(req, res) => {
    const {
        body
    } = req;
    const newUser = await User.create({
        ...body
    });
    res.status(201).json(newUser);
})