import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { 
    createCategory, 
    getAllCategories 
} from "../controllers/CategoryController.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/create-category").post(verifyJWT, upload.single("categoryImage"), createCategory);

router.route('/get-all-categories').get(verifyJWT, getAllCategories);

export default router;