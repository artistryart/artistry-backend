const Artwork = require("../Models/artworkModels");

module.exports = {
  getAllArtworks: async (req, res) => {
    try {
      const artworks = await Artwork.find().populate("Creator_ID", "Name").populate('Category_ID', 'Category_name');
      res.status(200).json(artworks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching artworks", error: error.message });
    }
  },

  getArtworkById: async (req, res) => {
    try {
      const artwork = await Artwork.findById(req.params.id).populate("Creator_ID");
      if (!artwork) return res.status(404).json({ message: "Artwork not found" });
      res.status(200).json(artwork);
    } catch (error) {
      res.status(500).json({ message: "Error fetching artwork", error: error.message });
    }
  },

  createArtwork: async (req, res) => {
    try {
      const artwork = new Artwork(req.body);
      await artwork.save();
      res.status(201).json({ message: "Artwork created successfully", artwork });
    } catch (error) {
      res.status(500).json({ message: "Error creating artwork", error: error.message });
    }
  },

  updateArtwork: async (req, res) => {
    try {
      const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedArtwork) return res.status(404).json({ message: "Artwork not found" });
      res.status(200).json({ message: "Artwork updated successfully", updatedArtwork });
    } catch (error) {
      res.status(500).json({ message: "Error updating artwork", error: error.message });
    }
  },

  deleteArtwork: async (req, res) => {
    try {
      const deletedArtwork = await Artwork.findByIdAndDelete(req.params.id);
      if (!deletedArtwork) return res.status(404).json({ message: "Artwork not found" });
      res.status(200).json({ message: "Artwork deleted successfully", deletedArtwork });
    } catch (error) {
      res.status(500).json({ message: "Error deleting artwork", error: error.message });
    }
  },
};
