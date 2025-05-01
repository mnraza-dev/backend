import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim:true
    },
    isVerified:{
        type: Boolean,
        default: false
    }
});

const User = mongoose.model("User", userSchema);

export default User;