const express = require("express");
const router = express.Router();
const emailController = require("../controllers/sendemail");

router.post("/sendemail", emailController);

module.exports = router;
