import express from "express";
import { popular, productcreat, productget } from "../controller/product.controller.js";
import { imageupload } from "../servises/image.servises.js";
export const productroute = express.Router()
productroute.route("/productcreat").get(imageupload.array('product_image',10),productcreat)
productroute.route("/product/get").get(productget)
productroute.route("/product/popular").get(popular)
export default productroute