import jwt from "jsonwebtoken";
import { isBlacklist } from "../utils/blacklist.js";
import config from "../config/index.js";

export const authMiddleware = (req,res,next) =>{
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({message: "no token provided"});
    }
    //  console.log(token);
     
    const token = authHeader.split(' ')[1];

    if (isBlacklist(token)) {
        return res.status(401).json({message: "Token blacklisted, please login again"});
    }

    try {
        const decode = jwt.verify(token,(config.KEY && config.KEY.SECRET_KEY) || "SECRET_KEY");
        
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid or expired token"});
    }
}