import mongoose, { Schema } from 'mongoose';

const foodSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        min: 1,
        required: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
});

export const Food = mongoose.model('Food', foodSchema);