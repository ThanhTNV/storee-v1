const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customer_name: { type: String, required: true },
  customer_email: { type: String, required: true },
  customer_address: { type: String, required: true },
  order_date: { type: Date, default: Date.now },
  status: { type: String, required: true, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' },
});

module.exports = mongoose.model('Order', OrderSchema);
