import { Router } from "express";
import { addFood } from "../controllers/FoodController.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/add-food").post(verifyJWT, verifyAdmin, upload.single("foodImage"), addFood);

export default router;