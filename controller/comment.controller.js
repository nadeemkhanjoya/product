import express from "express";
import comment from "../modal/comment.modal.js";

export const comm = async (req, res) => {
    const create = await comment.create(req.body)
    res.send({
        status: true,
        msg: "comment succesfully",
        data: create
    })
}
export const commentget = async (req, res) => {
    const get = await comment.find({ status: "Active" }).populate("product_id").populate("comment_by")
    if (get) {
        res.send({
            status: true,
            msg: " all comment",
            data: get
        })
    } else {
        res.send({
            status: false,
            msg: " not found comment",
            data: {}
        })
    }
}


export const commentupdate = async (req, res) => {
    var chek = await comment.findOneAndUpdate({product_id:req.body.product_id},req.body)
     if(chek){
      var creat=  await comment.create(req.body)
        res.send({
            status:true,
            msg:"update succesfully",
            data:creat
        })
     }else{
        res.send({
            status:false,
            msg:"data not found",
            data:{}
        })
     }
}

export const commentdelete = async (req, res) => {
    var chek = await comment.findOneAndDelete({product_id:req.body.product_id})
     if(chek){
     
        res.send({
            status:true,
            msg:"delete succesfully",
            data:chek
        })
     }else{
        res.send({
            status:false,
            msg:"data not found",
            data:{}
        })
     }
}

