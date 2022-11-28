import express from "express";
import sharemodal from "../modal/share.modal.js";
import share from "../router/share.route.js";
export const sharecreat = async (req, res) => {
    var send = await sharemodal.create(req.body)
    if (send) {
        res.send({
            status: true,
            msg: "share succesfully",
            data: send
        })

    } else {
        res.send({
            status: false,
            msg: "data not found",
            data: {}
        })
    }

}
export const shareget = async (req, res) => {
    var scr = await sharemodal.find({ status: "Active" }).populate("product_id").populate("who_shared").populate("who_received")
    if (scr) {
        res.send({
            status: true,
            msg: "data fatch",
            data: scr
        })
    } else {
        res.send({
            status: false,
            msg: "data not found",
            data: {}
        })
    }
}



export const sharedelete = async (req, res) => {
    var chek = await sharemodal.findOneAndDelete({ enum: [{ product_id: req.body.product_id, who_received: req.body.who_received }] })
    if (chek) {

        res.send({
            status: true,
            msg: "delete succesfully",
            data: chek
        })
    } else {
        res.send({
            status: false,
            msg: "data not found",
            data: {}
        })
    }
}