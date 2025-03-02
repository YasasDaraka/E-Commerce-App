import { ClientSession } from "mongoose";
import { Item, Order, OrderDetail } from "../../database/schemas/mongodbSchemas";

const orderRepository = {

   createOrder : async (session: ClientSession, customer:any, data:any) => { 
    const order = new Order({
      userId: customer._id,
      amount: data.amount,
      addresses: data.addresses,
      status: data.status,
      cardNum: data.cardNum,
      
    });
    return await order.save({ session });
  },
  createOrderDetails : async (session: ClientSession, orderId:any, data:any ) => { 
      const orderDetail = new OrderDetail({
        orderId: orderId,
        itemId: data.itemId,
        quantity: data.quantity,
        unitPrice: data.unitPrice,
        total: data.total,
      });
      return await orderDetail.save({ session });
  }
};

export default orderRepository;
