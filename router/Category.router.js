import express from "express"
import { getall, lookup, sin } from "../controller/Category.controller.js"
const catergoryrout= express.Router()

catergoryrout.route("/category/sin").get(sin)
catergoryrout.route("/category/getall").get(getall)
catergoryrout.route("/category/lookup").post(lookup)
export default catergoryrout