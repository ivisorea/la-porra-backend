import asyncHandler from "../middleware/asyncHandler.js";
import Team from "../models/Team.js";

//Get all teams
export const getAllTeams = asyncHandler(async(req, res) => {
    const teams = await Team.find();
    res.json(teams);
})

//Create a new team
export const createTeam = asyncHandler(async(req, res) => {
    const {
        body
    } = req;
    const newTeam = await Team.create({
        ...body
    });
    res.status(201).json(newTeam);
})