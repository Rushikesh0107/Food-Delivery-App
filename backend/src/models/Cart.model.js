import mongoose, { Schema } from  'mongoose'

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
    },
    instruction: {
        type: String,
        default: ''
    },
    quantity: {
        type: Number,
        default: 1
    },
    totalPrice: {
        type: Number,
        default: 0,
        required: true
    },
}, {timestamps: true})

export const Cart = mongoose.model('Cart', cartSchema)
