const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Category = require('../models/category');
const Product = require('../models/product');

// GET request for creating a Category
exports.category_create_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - CREATE CATEGORY NOT IMPLEMENT");
});

// POST request for creating Category
exports.category_create_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - CREATE CATEGORY NOT IMPLEMENT");
});

// GET request to delete Category
exports.category_delete_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - delete Category NOT IMPLEMENT");
});

// POST request to delete Category
exports.category_delete_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - delete Category NOT IMPLEMENT");
});

// GET request to update Category
exports.category_update_get = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - update Category NOT IMPLEMENT");
});

// POST request to update Category
exports.category_update_post = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("POST - update Category NOT IMPLEMENT");
});

// GET request for one Category
exports.category_detail = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - CATEGORY NOT IMPLEMENT");
});

// GET request for list of all Categories
exports.category_list = asyncHandler(async (req, res, next) => {
    res.statusCode(200);
    res.type("text/plain");
    res.send("GET - list of all Categories NOT IMPLEMENT");
});