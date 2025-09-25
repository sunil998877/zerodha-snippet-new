import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import config from "./config/index.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import tempHoldings from "./init/tempHoldings.js";
import tempPositions from "./init/tempPositions.js";
import PositionsModel from "./model/PositionsModel.js";
import HoldingsModel from "./model/HoldingsModel.js";
import OrdersModel from "./model/OrdersModel.js";
// import twilio from "twilio";


import session from "express-session";
import passport from "passport";
import { router } from "./routes/auth.route.js";
import { route } from "./routes/auth.profile.js";
import "./config/passport.js";

import logoutRoutes from "./routes/user.logout.js";
import { routerOTP } from "./routes/auth.Otp.js";


const app = express();
// if by default port is empty then 3001 port will work
const PORT = config.PORT.PORT || 3001;
// mongodb connection
connectDB();


const allowedOrigins = [
  "http://localhost:5173",
  "https://zerodha-snippet-new-clone.vercel.app",
  config.URI.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function(origin, callback){
    if(!origin || allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(bodyParser.json());

app.use(session({
  secret: "your_secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,     
    sameSite: "lax"   
  }
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("server is running...");
});

// app.get("/api/v1/auth/profile",authMiddleware,(req,res)=>{
//     res.json({user:req.user});
// });

app.use("/api/v1/user",logoutRoutes);

app.use("/api/v1/user",router);
app.use("/api/v1/user",route);


app.use("/api/v1/user",routerOTP);
// app.use("/api/v1/auth",logOut);

//insert holding data
// app.get("/addHoldings", async (req, res) => {
//     await tempHoldings();
//     res.send("Holdings added!");
//   });
//insert positions  data
// app.get("/addPositions", async (req, res) => {
    //     await tempPositions();
    //     res.send("Positions added!");
    //   });

// allholdings data find route
app.get("/allHoldings",async(req,res)=>{
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})
app.get("/allPositions", async (req,res)=>{
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", async (req,res)=>{
    const {name,qty,price,mode} = req.body;
    const newOrder = await OrdersModel.create({name,qty,price,mode});
    res.json(newOrder);
})


// send OTP


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
