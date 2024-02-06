import express from 'express'
import { fetchOrder } from '../controllers/OrderController.js'
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = express.Router()

router.route("/fetch-order").get(verifyJWT, fetchOrder)

export default router;