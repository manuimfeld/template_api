const express = require("express");
const router = express.Router();
import { getArticles } from "../controllers/articles";
import { checkJwt } from "../middlewares/session";

router.get("/", checkJwt, getArticles);

module.exports = router;
