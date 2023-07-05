const express = require("express");
const router = express.Router();
const user = require("./user");

router.use("/users", user); // endpoint for public user

module.exports = router;
