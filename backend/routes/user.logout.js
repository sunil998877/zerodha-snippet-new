import express from "express";
import { addToBlacklist } from "../utils/blacklist.js";


const router = express.Router();

router.post("/logout", (req,res) =>{
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(400).json({ message: "Token required" });
    }

    const token = authHeader.split(" ")[1];
    addToBlacklist(token);
    return res.json({ message: "Logout successful"});
})

export default router;