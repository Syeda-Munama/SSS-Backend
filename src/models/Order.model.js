import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    sellerName: {
        type: String,
        required: true
    },
    billerName: {
        type: String,
        required: true
    },
    
    paymentType: {
        type: String,
        required: true
    },
    AccessoriesItems: {
        type: Array,
        required: true
    }
},{timestamps: true})

export const Order = mongoose.model("order", OrderSchema)
