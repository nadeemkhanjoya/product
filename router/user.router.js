import express from "express"

import { sinup , get, resendOtp, forgot, deletedata, cheakotp, email_paas} from "../controller/user.controller.js"
const userroute = express.Router()

userroute.route("/user/creat").post(sinup)
userroute.route("/user/get").post(get)
userroute.route("/user/delete").put(deletedata)
userroute.route("/user/otp").get(resendOtp)
userroute.route("/user/veryfyotp").post(cheakotp)
// userroute.route("/user/email").get(emailSend)
userroute.route("/user/emailsendotp").get(email_paas)
userroute.route("/user/forgot").get(forgot)
// userroute.route("/user/inser").post(insertData)
export default userroute