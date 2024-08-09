import { Router } from "express";
import { deleteOrder, getOrder, orderPlaced } from "../controllers/Order.controller.js";


const router = Router()

router.route("/sendAccessories").post(orderPlaced)
router.route("/getAccessories").get(getOrder)
router.route("/deleteAccessories/:id").delete(deleteOrder)
export default router;