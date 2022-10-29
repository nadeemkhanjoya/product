import express from "express"
import { GetAll, sinnn } from "../controller/reviewreting.controller.js"
const reviewreting = express.Router()

reviewreting.route("/sin/reviewreting").post(sinnn)
reviewreting.route("/getall/reviewreting").get(GetAll)
export default reviewreting