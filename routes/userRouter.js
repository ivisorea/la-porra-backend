import { Router } from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/User.js";

const userRouter = Router();

userRouter
    .get("/", asyncHandler(async(req, res) => {
        const users = await User.find();
        res.json(users);
    }))
    .post("/", asyncHandler(async(req, res) => {
        const {
            body
        } = req;
        const newUser = await User.create({
            ...body
        });
        res.status(201).json(newUser);
    }))

export default userRouter;