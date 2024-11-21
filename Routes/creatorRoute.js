const express = require("express");
const router = express.Router();
const creatorController = require("../Controllers/creatorController");

// Routes for Creator
router.get("/", creatorController.getAllCreators);
router.get("/:id", creatorController.getCreatorById);
router.post("/", creatorController.createCreator);
router.put("/:id", creatorController.updateCreator);
router.delete("/:id", creatorController.deleteCreator);

module.exports = router;