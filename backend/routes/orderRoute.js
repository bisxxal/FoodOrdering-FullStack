import express from "express"; 
import authMiddleware from "../middleware/auth.js";
import { listOrder, placeOrder, updateOrder, userOrder, verifyorder } from "../controller/orderController.js";

const orderRouter = express.Router(); 

orderRouter.post("/place",authMiddleware, placeOrder);
orderRouter.post("/verify", verifyorder);
orderRouter.post("/userorders",authMiddleware, userOrder);
orderRouter.post("/list", listOrder);
orderRouter.post("/status", updateOrder);

export default orderRouter;
