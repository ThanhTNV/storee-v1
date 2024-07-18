const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Category = require("../models/category");
const Product = require("../models/product");

// GET request for creating a Category
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("GET - CREATE CATEGORY NOT IMPLEMENT");
});

// POST request for creating Category
exports.category_create_post = [
  //Validate an santinize data
  body("name")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("Name must be at least 1 character and maxium 100 characters.")
    .escape()
    .withMessage("Name must be specified."),
  body("description").trim().escape(),

  //catch error
  asyncHandler(async (req, res, next) => {
    //Extract error from request validation
    const err = validationResult(req);

    const new_category = new Category({
      name: req.body.name,
      description: req.body.description,
    });

    //Return error if data is not valid
    if (!err.isEmpty()) {
      res.status(400).json({ errors: err.array() });
    } else {
      //Save to database
      try {
        const saveCategory = await new_category.save();
        res.status(201).json(saveCategory);
      } catch (error) {
        res.status(500).json({
          message: "Error saving category",
          error: error.message,
        });
      }
    }
  }),
];

// GET request to delete Category
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("GET - delete Category NOT IMPLEMENT");
});

// POST request to delete Category
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("POST - delete Category NOT IMPLEMENT");
});

// GET request to update Category
exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.status(404);
  res.type("text/plain");
  res.send("GET - update Category NOT ALLOWED");
});

// POST request to update Category
exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.status(200);
  res.type("text/plain");
  res.send("POST - CREATE CATEGORY NOT IMPLEMENT");
});

// GET request for one Category
exports.category_detail = asyncHandler(async (req, res, next) => {
  const [category, cate_products] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Product.find({ category: req.params.id }, "name price"),
  ]);

  if (category === null) {
    return next(new Error(`Category with ID ${req.params.id} not found`));
  } else {
    res.status(200).json({
      category: category,
      products: cate_products,
    });
  }
});

// GET request for list of all Categories
exports.category_list = asyncHandler(async (req, res, next) => {
  const categories = await Category.find().exec();

  if (categories === null) {
    return next(new Error("Categories not found"));
  } else {
    res.status(200).json({ categories: categories });
  }
});
