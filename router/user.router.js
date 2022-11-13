import express from "express"

import { sinup , get, resendOtp, emailSend, tryi, forgot} from "../controller/user.controller.js"
const userroute = express.Router()

userroute.route("/user/creat").post(sinup)
userroute.route("/user/get").post(get)
userroute.route("/user/otp").get(resendOtp)
userroute.route("/user/email").get(emailSend)
userroute.route("/user/tryi").get(tryi)
userroute.route("/user/forgot").get(forgot)
export default userroute