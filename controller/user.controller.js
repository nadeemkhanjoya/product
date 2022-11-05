import user from "../modal/user.modal.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const sinup =async(req,res)=>{
   try {
    const sinn = await user.findOne({email:req.body.email})
    if(sinn){
        res.send({
            status:false,
            msg:"already exist",
            data:[]
        })
    }else{
        var hash = await bcrypt.hash(req.body.password,10)
        req.body.password= hash
        var creat = await user.create(req.body)
     if(creat) {
        var token = await jwt.sign({time:Date(),userid:creat._id},"jjjj")
     creat.token = token
     }   
    }
    res.send(creat)
   } catch (error) {
    res.send(error)
   }
}

export const get = async(req,res)=>{
    const namee = await user.findOne({ email: req.body.email })
    if (namee) {
       var a = await bcrypt.compare(req.body.password, namee.password)
       if (a == true) {
          namee.token = await jwt.sign({ time: Date(), userId: namee._id }, "jjjj")
          res.send({
             status: true,
             msg: "you are right",
             data: namee
          })
       } else {
          res.send("worng password")
       }
    } else {
       res.send("worng name ")
    }
}

export const resendOtp = async(req,res)=>{
   var otp = 1234
   req.body.otp=otp
   const data = await user.findByIdAndUpdate({_id:req.body._id},req.body)
   if(data){
      res.send({
         status:true,
         msg:"otp send",
         data:data
      })
   }else{
      res.send({
         status:false,
         msg:"not otp send",
         data:{}
      })
   }

}

