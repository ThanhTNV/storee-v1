const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  stock: { type: Number, required: true },
});

ProductSchema.virtual("url").get(function () {
  return `/storee/product/${this._id}`;
});

module.exports = mongoose.model("Product", ProductSchema);
