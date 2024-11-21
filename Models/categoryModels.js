const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema(
    {
        Category_name: { type: String, required: true },
        Category_description: { type: String, required: true },
    },

    {
        timestamps: true
    }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category