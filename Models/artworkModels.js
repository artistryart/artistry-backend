const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema(
    {
        Artwork_name: { type: String, required: true },
        Unit_price: { type: Number, required: true },
        Stock: { type: Number, required: true },
        Artwork_description: { type: String, required: true },
        Artwork_tag: { type: [String] }, // Lưu trữ danh sách các thẻ phân loại
        Artwork_image: { type: String, required: true }, // Lưu trữ danh sách hình ảnh
        Artwork_size: { type: [String], required: true }, // Lưu trữ danh sách kích thước
        Review: { type: [String] }, // Lưu đánh giá của khách hàng
        Creator_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Creator", required: true }, // Liên kết tới Creator
        Category_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, // Liên kết tới Category
  },
  {
    timestamps: true
});

  const Artwork = mongoose.model("Artwork", artworkSchema);
  module.exports = Artwork;