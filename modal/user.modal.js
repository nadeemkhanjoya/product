import mongoose from "mongoose";
const userschema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
     type:String,
     required:true
    },
    token:{
        type:String,
        required:false
       },

    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    }, 
    email_verify:{
       type:Boolean,
       required:false,
       default:false
    } , 
    number_verify:{
       type:Boolean,
       required:false,
       default:false
    } , 
    otp:{
       type:Number,
       required:false
       
    }, 

    createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})
const user = mongoose.model("user",userschema)
export default user
