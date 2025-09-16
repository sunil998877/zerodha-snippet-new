import mongoose from "mongoose";
import {PositionsSchema} from "../schema/PositionsSchema.js";

const PositionsModel = mongoose.model("position", PositionsSchema);

export default PositionsModel;