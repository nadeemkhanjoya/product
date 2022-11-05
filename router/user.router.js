import express from "express"

import { sinup , get, resendOtp} from "../controller/user.controller.js"
const userroute = express.Router()

userroute.route("/user/creat").post(sinup)
userroute.route("/user/get").post(get)
userroute.route("/user/otp").get(resendOtp)
export default userroute