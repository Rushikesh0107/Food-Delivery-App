import express from 'express'
import { 
    checkout,
    getKey,
    paymentVerification,
} from '../controllers/PaymentController.js'
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = express.Router()

router.route("/checkout").post(verifyJWT, checkout);

router.route("/get-key").get(getKey);

router.route("/verify-payment").post(paymentVerification)

export default router;