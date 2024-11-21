const express = require("express");
const router = express.Router();
const categoryController = require("../Controllers/categoryController");

// Routes for Category
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
