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
import { sendOTP } from "./twilio/sendOtp.js";
import { verifyOtp } from "./twilio/verifyOtp.js";

import session from "express-session";
import passport from "passport";
import { router } from "./routes/auth.route.js";
import { route } from "./routes/auth.profile.js";
import "./config/passport.js";



const app = express();
// if by default port is empty then 3001 port will work
const PORT = config.PORT.PORT || 3001;
// mongodb connection
connectDB();


// app.use(cors());
app.use(cors({
  origin: "http://localhost:5173",
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

app.use("/api/v1/auth",router);
app.use("/api/v1/auth",route);

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
app.post("/send-otp", async (req,res)=>{
    await sendOTP(req, res);
});

// verify otp
app.post("/verify-otp", async (req,res)=>{
  await verifyOtp(req,res);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
