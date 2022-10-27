import express from "express"
import { getall, sin } from "../controller/Category.controller.js"
const catergoryrout= express.Router()

catergoryrout.route("/category/sin").get(sin)
catergoryrout.route("/category/getall").get(getall)
export default catergoryrout