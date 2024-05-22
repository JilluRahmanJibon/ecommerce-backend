import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product.route";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());
app.use("/api/products/", ProductRoutes);

const getAController = (req: Request, res: Response) => {
	const a = "Welcome to ecommerce server";
	res.send(a);
};
app.get("/", getAController);

export default app;
