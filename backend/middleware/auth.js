import jwt from "jsonwebtoken";
import { isBlacklist } from "../utils/blacklist.js";
import config from "../config/index.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Malformed token" });
  }

  // Check blacklist
  if (isBlacklist(token)) {
    return res.status(401).json({ message: "Token blacklisted, please login again" });
  }

  try {
    const secretKey = config.KEY.SECRET_KEY || "SECRET_KEY";
    console.log("Using secret key:", secretKey ? "Present" : "Missing");

    // Verify the token
    const decoded = jwt.verify(token, secretKey);
    console.log("Token is valid:", decoded);
    
    req.user = decoded; // Attach decoded token payload to request
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
