import { Router } from "express";
import { createTeam, getAllTeams } from "../controllers/team.js";

const teamRouter = Router();

teamRouter
    .get("/", getAllTeams)
    .post("/", createTeam)
    

export default teamRouter;