import { Order } from "../models/Order.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js"
const orderPlaced = asyncHandler(async (req, res) => {

    const { billerName, sellerName, AccessoriesItems,paymentType } = req.body

    if (!billerName|| !sellerName || !paymentType  || !AccessoriesItems ) {
        throw new ApiError(400, "All fields are required...!")
    }
    // let name = firstName + lastName
    const order = await Order.create({
       billerName,
       sellerName,
       paymentType,
        AccessoriesItems
    })

    return res.status(201).json(
        new ApiResponse(200, order, "order Placed successfully.... ")
    )
})


const getOrder = asyncHandler(async (req, res) => {
    try {
        const Orderget = await Order.find({})
        res.status(200).json(
            new ApiResponse(201, Orderget, "order found successfully...")
        )
    } catch (error) {
        throw new ApiError(404, "order not found....")
    }

})

const deleteOrder = asyncHandler(async(req,res)=>{
    const { id } = req.params
    try {
        const orderDel = await Order.findByIdAndDelete({_id:id})
        res.status(200).json(
            new ApiResponse(201,orderDel,"order delete successfully...")
        )
    } catch (error) {
        throw new ApiError(404,"Something went wrong while deleting the notification....")
    }
})

export {
    orderPlaced,
    getOrder, 
    deleteOrder
}