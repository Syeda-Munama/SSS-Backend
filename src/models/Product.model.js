import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    sellPrice: {
        type: Number,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    product_id: {
        type: Number,
        required: true,
        unique: true
    }, 
    stock: {
        type: Number,
        required: true
    }
})

export const Product = mongoose.model("product", ProductSchema)
