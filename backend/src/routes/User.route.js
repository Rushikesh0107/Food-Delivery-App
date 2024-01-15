import { Router } from "express";
import { 
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar
} from "../controllers/UserController.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from '../middlewares/multer.middleware.js'

const router = Router();


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

router.route("/logout").get(verifyJWT, logoutUser)

router.route("/refresh-token").post(verifyJWT, refreshAccessToken)

router.route("/change-password").post(verifyJWT, changeCurrentPassword)

router.route("/me").get(verifyJWT, getCurrentUser)

router.route("/update-details").patch(verifyJWT, updateAccountDetails)

router.route("/update-avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)

export default router;