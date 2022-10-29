import mongoose from "mongoose";
const catrgoryschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },


    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})
const catergory = mongoose.model("category", catrgoryschema)
export default catergory
