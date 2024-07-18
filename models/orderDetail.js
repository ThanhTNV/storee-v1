const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderDetailSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

OrderDetailSchema.virtual("url").get(function () {
  return `/storee/orderdetail/${this._id}`;
});

module.exports = mongoose.model("OrderDetail", OrderDetailSchema);
