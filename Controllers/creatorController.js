const Creator = require("../Models/creatorModels");

module.exports = {
  getAllCreators: async (req, res) => {
    try {
      const creators = await Creator.find().populate("User_ID", "userName");
      res.status(200).json(creators);
    } catch (error) {
      res.status(500).json({ message: "Error fetching creators", error: error.message });
    }
  },

  getCreatorById: async (req, res) => {
    try {
      const creator = await Creator.findById(req.params.id);
      if (!creator) return res.status(404).json({ message: "Creator not found" });
      res.status(200).json(creator);
    } catch (error) {
      res.status(500).json({ message: "Error fetching creator", error: error.message });
    }
  },

  createCreator: async (req, res) => {
    try {
      const creator = new Creator(req.body);
      await creator.save();
      res.status(201).json({ message: "Creator created successfully", creator });
    } catch (error) {
      res.status(500).json({ message: "Error creating creator", error: error.message });
    }
  },

  updateCreator: async (req, res) => {
    try {
      const updatedCreator = await Creator.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCreator) return res.status(404).json({ message: "Creator not found" });
      res.status(200).json({ message: "Creator updated successfully", updatedCreator });
    } catch (error) {
      res.status(500).json({ message: "Error updating creator", error: error.message });
    }
  },

  deleteCreator: async (req, res) => {
    try {
      const deletedCreator = await Creator.findByIdAndDelete(req.params.id);
      if (!deletedCreator) return res.status(404).json({ message: "Creator not found" });
      res.status(200).json({ message: "Creator deleted successfully", deletedCreator });
    } catch (error) {
      res.status(500).json({ message: "Error deleting creator", error: error.message });
    }
  },
};
