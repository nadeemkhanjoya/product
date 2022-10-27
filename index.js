import express from "express";
import condb from "./config/db.js";
import catergoryrout from "./router/Category.router.js";
import productroute from "./router/product.route.js";
import reviewreting from "./router/reviewreting.route.js";
import subcategory from "./router/subcategory.router.js";


import userroute from "./router/user.router.js";
const app = express()
app.use(express.json())
app.use(userroute)
app.use(catergoryrout)
app.use(subcategory)
app.use(reviewreting)
app.use(productroute)
condb()
app.listen(1400,(req,res)=>{
    console.log("server is runnig 1400")
})

