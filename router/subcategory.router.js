import express  from "express";
import { Getall, sinnnn } from "../controller/subcategory.controller.js";
var subcategory = express.Router()
subcategory.route("/subcategory/creat").post(sinnnn)
subcategory.route("/subcategory/getall").get(Getall)
export default subcategory