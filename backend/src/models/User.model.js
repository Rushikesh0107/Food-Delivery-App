import mongoose from 'mongoose';

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        index: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    avatar: {
        type: String,
        required: true,
        trim: true,
    },
    refreshToken: {
        type: String,
        trim: true,
    }
}, {timestamps: true});

export const User  = mongoose.model("User", userSchema)