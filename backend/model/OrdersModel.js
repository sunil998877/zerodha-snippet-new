import mongoose from "mongoose";
import {OrdersSchema} from "../schema/OrdersSchema.js";

const OrdersModel = mongoose.model("order", OrdersSchema);

export default OrdersModel;