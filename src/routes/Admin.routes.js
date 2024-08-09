import { Router } from "express";
import { dataForAdmin, deleteDataForAdmin, getDataForAdmin } from "../controllers/AdminData.Controller.js";


const router = Router()

router.route("/senddata").post(dataForAdmin)
router.route("/getdata").get(getDataForAdmin)
router.route("/deletedata/:id").delete(deleteDataForAdmin)
export default router;