const express = require("express")
const router = express.Router();
// const { registerUser, loginUser, findUser, getAllUsers } = require("../Controllers/userController");
const userController = require("../Controllers/userController");

// router.post("/register", userController.registerUser)
// router.post("/login", userController.loginUser)
// router.get("/find/:userId", userController.findUser)
// router.get("/", userController.getAllUsers)

module.exports = router;