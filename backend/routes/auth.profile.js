import {profile} from "../controllers/auth.profile.js";
import express from "express";

export const route = express.Router();

route.get("/profile",profile);