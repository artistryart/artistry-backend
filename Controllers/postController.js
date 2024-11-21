const Post = require("../Models/postModels");

module.exports = {
  getAllPost: async (req, res) => {
    try {
      const posts = await Post.find().populate("Creator_ID", "Name").populate('Category_ID', 'Category_name');
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts", error: error.message });
    }
  },

  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate("Creator_ID");
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching post", error: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const post = new Post(req.body);
      await post.save();
      res.status(201).json({ message: "Post created successfully", post});
    } catch (error) {
      res.status(500).json({ message: "Error creating post", error: error.message });
    }
  },


};
