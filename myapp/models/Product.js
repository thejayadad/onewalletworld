import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images:{
        type: ["String"]
    },

}, {timestamps: true})

export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema)