import mongoose from "mongoose";

const subCategoryShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})
const subCategory = mongoose.model("subcategory", subCategoryShema);
export default subCategory;