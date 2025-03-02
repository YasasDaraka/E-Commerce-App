import express from "express";
var router = express.Router();
import orderController from "./orderController";

router.post('/', orderController.handleCreateOrder);

export default router;
