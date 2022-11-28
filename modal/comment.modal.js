import mongoos from "mongoose";

const commentschema= new mongoos.Schema({
    comment:{
        required:true,
        type:String
    },
    product_id:{
        type:mongoos.Schema.Types.ObjectId,ref:'product'
    },
    comment_by:{
        type:mongoos.Schema.Types.ObjectId,ref:'user',
},
    status:{
        type:String,
        enum:["Active","Diactive"],
        default:"Active"
    },
    createAt:{type:Date,default:Date.now },
   updateAt:{type:Date,default:Date.now }
})

const comment =mongoos.model("comment",commentschema)
export default comment