import express from "express"

import { sinup , get} from "../controller/user.controller.js"
const userroute = express.Router()

userroute.route("/user/creat").post(sinup)
userroute.route("/user/get").post(get)
export default userroute