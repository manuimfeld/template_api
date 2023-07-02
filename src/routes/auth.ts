const express = require("express");
const router = express.Router();
import authController from "../controllers/auth";

router.post("/login", authController.login);

router.post("/register", authController.register);

module.exports = router;
