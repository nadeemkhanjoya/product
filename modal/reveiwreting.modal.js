import mongoose from "mongoose";

const ReviewRatingShema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:"user",
        required:true
    },
    subcate:{
        type:mongoose.Schema.Types.ObjectId,ref:"subcategory",
        required:true
    },
    rating:{
        type:Number,
        enum:[1,2,3,4,5],
        required:true
    },
    review:{
        type:String,
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})
const ReviewRating = mongoose.model("reviewrating", ReviewRatingShema);
export default ReviewRating;