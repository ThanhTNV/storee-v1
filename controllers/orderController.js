const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const url = require("url");
const Order = require("../models/order");
const OrderDetail = require("../models/orderDetail");

// GET request for creating a ORDER
exports.order_create_get = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("GET - CREATE ORDER NOT IMPLEMENT");
});

// POST request for creating ORDER
exports.order_create_post = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("POST - CREATE ORDER NOT IMPLEMENT");
});

// GET request to delete ORDER
exports.order_delete_get = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("GET - delete ORDER NOT IMPLEMENT");
});

// POST request to delete Category
exports.order_delete_post = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("POST - delete ORDER NOT IMPLEMENT");
});

// GET request to update ORDER
exports.order_update_get = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("GET - update ORDER NOT IMPLEMENT");
});

// POST request to update ORDER
exports.order_update_post = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("POST - update ORDER NOT IMPLEMENT");
});

// GET request for one ORDER
exports.order_detail = asyncHandler(async (req, res, next) => {
  const [order, order_detail] = await Promise.all([
    Order.findById(req.params.id).exec(),
    OrderDetail.find({ order: req.params.id }).populate("product").exec(),
  ]);

  if (order === null) {
    return next(new Error("Order not found").status(404));
  } else {
    res.status(200).json({
      order: order,
      order_detail: order_detail,
    });
  }
});

// GET request for list of all ORDER
exports.order_list = asyncHandler(async (req, res, next) => {
  const orders = await Order.find().exec();
  if (orders === null) {
    return next(new Error("Order list not found").status(404));
  } else {
    res.status(200).json({
      orders: orders,
    });
  }
});
