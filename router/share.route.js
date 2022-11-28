import Express from "express";
import { sharecreat, sharedelete, shareget } from "../controller/share.controller.js";
const share = Express.Router()
share.route("/share/create").post(sharecreat)
share.route("/share/get").get(shareget)
share.route("/share/delete").post(sharedelete)
export default share