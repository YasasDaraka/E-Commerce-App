import { Request, Response, NextFunction } from "express";
import orderService from "./orderService";

const orderController = {
  handleCreateOrder: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await orderService.createOrder(req.body);
      res.status(201).json({ message: "Order created successfully" });
    } catch (error) {
      next(error);
    }
  },
};
export default orderController;
