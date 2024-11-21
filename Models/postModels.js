const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        Post_title: {type: String, minlength: 3,maxlength: 200, required: true},
        Post_content: {type: String, required: true},
        Post_tag: { type: [String], required: true }, 
        Post_image: { type: [String], required: true }, 
        Creator_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Creator", required: true }, // Liên kết tới Creator
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model("Post", postSchema);
module.exports = Post;