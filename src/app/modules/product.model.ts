import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";






// const productSchema = new Schema<TProduct>({
// 	name: { type: String, required: [true, "Product name is required"] },
// 	description: {
// 		type: String,
// 		required: [true, "Product description is required"],
// 	},
// 	price: { type: Number, required: [true, "Product price is required"] },
// 	category: { type: String, required: [true, "Product category is required"] },
// 	tags: { type: [String], default: [] },
// 	variants: {
// 		type: {
// 			type: String,
// 			required: true,
// 		},
// 		value: {
// 			type: String,
// 			required: true,
// 		},
// 	},
// 	inventory: {
// 		quantity: {
// 			type: Number,
// 			required: [true, "Product inventory quantity is required"],
// 		},
// 		inStock: { type: Boolean, default: true },
// 	},
// });
const productSchema = new Schema<TProduct>({
	name: { type: String, required: [true, "Product name is required"] },
	description: {
		type: String,
		required: [true, "Product description is required"],
	},
	price: { type: Number, required: [true, "Product price is required"] },
	category: { type: String, required: [true, "Product category is required"] },
	tags: { type: [String], default: [] },
	variants: {
		type: [
			{
				type: { type: String, required: true },
				value: { type: String, required: true },
			},
		],
		default: [],
	},
	inventory: {
		quantity: {
			type: Number,
			required: [true, "Product inventory quantity is required"],
		},
		inStock: { type: Boolean, default: true },
	},
});


export const Product = model<TProduct>('Product',productSchema)