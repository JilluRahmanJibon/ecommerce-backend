import { Request, Response } from "express";
import orderValidationSchema from "./order.zod.validation";
import { OrderService } from "./order.service";

// order create
const orderCreate = async (req: Request, res: Response) => {
	try {
		const orderData = req.body;
		const zodParseData = orderValidationSchema.parse(orderData);
		const result = await OrderService.createOrderIntoDB(zodParseData);
		res.status(200).json({
			success: true,
			message: "Order created successfully!",
			data: result,
		});
	} catch (err) {
		res.status(500).json({
			success: true,
			message: "Something went wrong when order",
		});
	}
};

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
	try {
		const result = await OrderService.getAllOrderInToDB();
		res.status(200).json({
			success: true,
			message: "Orders fetched successfully!",
			data: result,
		});
	} catch (err) {
		res.status(500).json({
			success: true,
			message: "Something went wrong orders get data",
			err,
		});
	}
};

// get orders by email
const getOrdersByEmail = async (req: Request, res: Response) => {
	const { email } = req.query;
	try {
		const result = await OrderService.getOrdersByEmailInToDB(email as string);
		if (result.length === 0) {
			res.status(404).json({
				success: false,
				message: "Order not found",
			});
			return
		}
		res.status(200).json({
			success: true,
			message: "Orders fetched successfully for user email!",
			data: result,
		});
	} catch (err) {
		res.status(500).json({
			success: true,
			message: "Something went wrong when get data by email",
			err,
		});
	}
};

export const OrderController = {
	orderCreate,
	getAllOrders,
	getOrdersByEmail,
};
