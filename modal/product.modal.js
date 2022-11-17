import mongoose from "mongoose";
import ProductImages from "./product.image.modal.js";

const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user' 
    },
    sub_cate:{
        type: mongoose.Schema.Types.ObjectId, ref: 'subcategory' ,
        required:true
    },
    is_popular:{
        type:Boolean,
        default:0
    },
    description:{
        type:String,
        required:true
    },
    images:[ProductImages],
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },

})

const product = mongoose.model("product",productschema)
export default product
