import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.js";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/User.js";

const userRouter = Router();

userRouter
    .get("/", getAllUsers)
    .post("/", createUser)

export default userRouter;