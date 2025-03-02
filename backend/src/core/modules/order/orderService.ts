import mongoose from "mongoose";
import { createError, HttpStatus } from "../../middlewares/customErrorHandler";
import logger from "../../utils/logger";
import orderRepository from "./orderRepository";
import userRepository from "../user/userRepository";
import productRepository from "../product/productRepository";

const orderService = {
  
  createOrder: async (orderData: any) => {
    const session = await mongoose.startSession();
    try {
      logger.info(`Creating Order: ${orderData.userId}`);
      session.startTransaction();
      
      const user = await userRepository.getUserByEmail(session, orderData.userId);

        if (!user) {
          logger.warn(`User not found: ${ orderData.userId}`);
          throw createError(HttpStatus.NOT_FOUND, "User not found");
        }
        
      const order = await orderRepository.createOrder(session, user._id, orderData);

      if (!order) {
        logger.error("Failed to create Order", {  orderData : orderData.userId });
        throw createError(HttpStatus.BAD_REQUEST, "Invalid input provided");
      }

      // orderData.orderDetails.map((orderDetail:any) => (

      //   const orderDetail = await orderRepository.createOrderDetails(session, order._id, orderDetail);

      // if (!orderDetail) {
      //   logger.error("Failed to create OrderDetails", {  orderDetails : orderData.orderDetails });
      //   throw createError(HttpStatus.BAD_REQUEST, "Invalid input provided");
      // }

      // ))
      
      await Promise.all(orderData.orderDetails.map(async (orderDetail: any) => {
   
        const detail = await orderRepository.createOrderDetails(session, order._id, orderDetail);
  
        if (!detail) {
          logger.error("Failed to create OrderDetails", { orderDetails: orderData.orderDetails });
          throw createError(HttpStatus.BAD_REQUEST, "Invalid input provided");
        }
      }));

      await productRepository.updateStock(session, orderData.orderDetails);

      await session.commitTransaction();
      logger.info(`Order created successfully: ${orderData.itemName}`);
    } catch (error) {
      logger.error(`Error creating Order: ${orderData.userId}`, { error });
      await session.abortTransaction();
      throw error;
    }finally {
      session.endSession();
    }
  }
};

export default orderService;
