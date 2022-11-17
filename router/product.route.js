import express from "express";
import { productcreat, productget } from "../controller/product.controller.js";
import { imageupload } from "../servises/image.servises.js";
export const productroute = express.Router()
productroute.route("/productcreat").get(imageupload.array('product_image',10),productcreat)
productroute.route("/product/get").get(productget)
export default productroute