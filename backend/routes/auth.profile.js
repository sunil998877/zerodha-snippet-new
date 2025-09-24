import {profile} from "../controllers/auth.profile.js";
import express from "express";
// import { authMiddleware } from "../middleware/auth.js";
// import authMiddleware from "../middleware/signup.js";

export const route = express.Router();

route.get("/profile",profile);