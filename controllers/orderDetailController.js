const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Order = require('../models/order');
const OrderDetail = require('../models/orderDetail');
const Product = require('../models/product');

// GET request for creating a ORDER
exports.orderdetail_create_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - CREATE ORDER NOT IMPLEMENT");
});

// POST request for creating ORDER
exports.orderdetail_create_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - CREATE ORDER NOT IMPLEMENT");
});

// GET request to delete ORDER
exports.orderdetail_delete_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - delete ORDER NOT IMPLEMENT");
});

// POST request to delete Category
exports.orderdetail_delete_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - delete ORDER NOT IMPLEMENT");
});

// GET request to update ORDER
exports.orderdetail_update_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - update ORDER NOT IMPLEMENT");
});

// POST request to update ORDER
exports.orderdetail_update_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - update ORDER NOT IMPLEMENT");
});

// GET request for one ORDER
exports.orderdetail_detail = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - ORDER NOT IMPLEMENT");
});

// GET request for list of all ORDER
exports.orderdetail_list = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - list of all ORDER NOT IMPLEMENT");
});