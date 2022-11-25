import express from "express"

import { sinup , get, resendOtp, forgot, deletedata, cheakotp, email_paas, resetpass, insertData} from "../controller/user.controller.js"
import { excel } from "../servises/image.servises.js"
const userroute = express.Router()

userroute.route("/user/creat").post(sinup)
userroute.route("/user/get").post(get)
userroute.route("/user/delete").put(deletedata)
userroute.route("/user/otp").post(resendOtp)
userroute.route("/user/veryfyotp").post(cheakotp)
// userroute.route("/user/email").get(emailSend)
userroute.route("/user/emailsendotp").post(email_paas)
userroute.route("/user/forgot").post(forgot)
userroute.route("/user/resetpass").post(resetpass)
userroute.route("/user/exceluplod").post(excel.single("excel_upload"),insertData)

export default userroute