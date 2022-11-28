import mongoose from "mongoose";
const shareschema = new mongoose.Schema({
    share:{
        required:true,
        type:String
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,ref:"product" 
    },
    who_shared:{
        type:mongoose.Schema.Types.ObjectId,ref:"user"
    },
    I:{
        type:mongoose.Schema.Types.ObjectId,ref:"user"
    },
    createdAt:{
        type:Date,default:Date.now
    },
    updatedAt:{
        type:Date,default:Date.now
    },
status:{
    type:String,
    enum:["Active","deactive"],
    default:"Active"
}
    
})

const sharemodal = mongoose.model("share",shareschema)
export default sharemodal