const Category = require("../Models/categoryModels");

module.exports = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) return res.status(404).json({ message: "Category not found" });
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: "Error fetching category", error: error.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const category = new Category(req.body);
      await category.save();
      res.status(201).json({ message: "Category created successfully", category });
    } catch (error) {
      res.status(500).json({ message: "Error creating category", error: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
      res.status(200).json({ message: "Category updated successfully", updatedCategory });
    } catch (error) {
      res.status(500).json({ message: "Error updating category", error: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const deletedCategory = await Category.findByIdAndDelete(req.params.id);
      if (!deletedCategory) return res.status(404).json({ message: "Category not found" });
      res.status(200).json({ message: "Category deleted successfully", deletedCategory });
    } catch (error) {
      res.status(500).json({ message: "Error deleting category", error: error.message });
    }
  },
};
