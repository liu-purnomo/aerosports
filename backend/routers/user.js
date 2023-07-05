const express = require("express");
const Controller = require("../controllers/user");
const isLoggedIn = require("../middlewares/authentication");
const router = express();

router.get("/", Controller.index);
router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/detail", isLoggedIn, Controller.detail);
router.put("/update", isLoggedIn, Controller.update);
router.patch("/change-password", isLoggedIn, Controller.changePassword);

module.exports = router;
