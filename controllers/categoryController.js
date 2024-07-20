const asyncHandler = require("express-async-handler");
const { query, body, validationResult } = require("express-validator");
const url = require("url");
const Category = require("../models/category");
const Product = require("../models/product");

// GET request query for creating a Category
exports.category_create_get = [
  query("name", "Category name must contain at least 1 character")
    .trim()
    .isLength({ min: 1, max: 100 })
    .escape(),
  query("description", "Category name must contain at least 1 character")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    const new_category = new Category({
      name: url.parse(req.url, true).query.name,
      description: url.parse(req.url, true).query.description,
    });

    // Return error if data is not valid
    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.send({
        errors: errors.array(),
      });
      return;
    } else {
      const exist_category = await Category.findOne({
        name: new_category.name,
      })
        .collation({ locale: "en", strength: 2 })
        .exec();
      if (exist_category) {
        res.redirect(`${exist_category.url}`);
      } else {
        //Save to database
        try {
          const save_category = await new_category.save();
          res.status(201).json({
            category: save_category,
          });
        } catch (error) {
          res.status(500).json({
            message: "Error saving category",
            error: error.message,
          });
        }
      }
    }
  }),
];

// POST request for creating Category
exports.category_create_post = [
  // Validate and sanitize the name field.
  body("name", "Category name must contain at least 1 character")
    .trim()
    .isLength({ min: 1, max: 100 })
    .escape(),
  body("description", "Category name must contain at least 1 character")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    const new_category = new Category({
      name: req.body.name,
      description: req.body.description,
    });

    // Return error if data is not valid
    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.send({
        errors: errors.array(),
      });
      return;
    } else {
      const exist_category = await Category.findOne({
        name: new_category.name,
      })
        .collation({ locale: "en", strength: 2 })
        .exec();
      if (exist_category) {
        res.redirect(`${exist_category.url}`);
      } else {
        //Save to database
        try {
          const save_category = await new_category.save();
          res.status(201).json({
            category: save_category,
          });
        } catch (error) {
          res.status(500).json({
            message: "Error saving category",
            error: error.message,
          });
        }
      }
    }
  }),
];

// GET request to delete Category
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  const [category, cate_products] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Product.find({ category: req.params.id }).exec(),
  ]);

  if (category === null) {
    return next(new Error("Category not found"));
  }

  if (cate_products.length > 0) {
    res.status(400).json({
      category: category,
      category_products: cate_products,
    });
  } else {
    Category.findByIdAndDelete(req.params.id).exec();
    res.status(201).json({
      deleted_category: category,
    });
  }
});

// POST request to delete Category
exports.category_delete_post = [
  body("id").escape(),

  asyncHandler(async (req, res, next) => {
    const error = validationResult(req);

    const [category, cate_products] = await Promise.all([
      Category.findById(req.body.id).exec(),
      Product.find({ category: req.body.id }, "name description").exec(),
    ]);

    // Return error if data is not valid
    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.send({
        errors: errors.array(),
      });
      return;
    } else {
      if (category === null) {
        return next(new Error("Category not found"));
      }

      if (cate_products.length > 0) {
        res.status(400).json({
          category: category,
          category_products: cate_products,
        });
      } else {
        await Category.findByIdAndDelete(req.body.id).exec();
        res.status(201).json({
          deleted_category: category,
        });
      }
    }
  }),
];

// GET request to update Category
exports.category_update_get = [
  query("name").trim().escape(),
  query("description").trim().escape(),

  asyncHandler(async (req, res, next) => {
    const error = validationResult(req);

    const category = await Category.findById(req.params.id).exec();
    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.send({
        errors: errors.array(),
      });
      return;
    } else {
      if (category === null) {
        return next(new Error("Category not found"));
      }
      const new_cateName = url.parse(req.url, true).query.name;
      const new_cateDesc = url.parse(req.url, true).query.description;

      const saved_category = await Category.findByIdAndUpdate(req.params.id, {
        name: new_cateName,
        description: new_cateDesc,
      }).exec();
      res.status(201).json({
        updated_category: saved_category,
      });
    }
  }),
];

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
