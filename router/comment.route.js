import express  from "express";
import { comm, commentdelete, commentget, commentupdate } from "../controller/comment.controller.js";
const commentrouter= express.Router()
commentrouter.route("/comment/create").get(comm)
commentrouter.route("/coment/get").post(commentget)
commentrouter.route("/coment/update").post(commentupdate)
commentrouter.route("/coment/delete").post(commentdelete)
export default commentrouter