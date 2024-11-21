const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");

// Routes for Artwork
router.get("/", postController.getAllPost);
router.get("/:id", postController.getPostById);
router.post("/", postController.createPost);

module.exports = router;
