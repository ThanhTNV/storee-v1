const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Product = require('../models/product');
const Category = require('../models/category');
const OrderDetail = require('../models/orderDetail');

// GET request for creating a ORDER
exports.product_create_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - CREATE ORDER NOT IMPLEMENT");
});

// POST request for creating ORDER
exports.product_create_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - CREATE ORDER NOT IMPLEMENT");
});

// GET request to delete ORDER
exports.product_delete_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - delete ORDER NOT IMPLEMENT");
});

// POST request to delete Category
exports.product_delete_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - delete ORDER NOT IMPLEMENT");
});

// GET request to update ORDER
exports.product_update_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - update ORDER NOT IMPLEMENT");
});

// POST request to update ORDER
exports.product_update_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - update ORDER NOT IMPLEMENT");
});

// GET request for one ORDER
exports.product_detail = asyncHandler(async (req, res, next) => {
    const product = await Product.find().populate('category').exec();

    if(product === null) {
        return next(new Error('Product not found').status(404));
    } else {
        res.status(200).json({
            product: product
        })
    }
});

// GET request for list of all PRODUCTS
exports.product_list = asyncHandler(async (req, res, next) => {
    const products = await Product.find().exec();

    if(products === null) {
        return next(new Error('Product list not found').status(404));
    } else {
        res.status(200).json({
            products: products
        })
    }
});