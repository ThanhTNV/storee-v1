const express = require("express");
const router = express.Router();

// Require controller modules
const category_controller = require('../controllers/categoryController');
const product_controller = require('../controllers/productController');
const order_controller = require('../controllers/orderController');
const orderDetail_controller = require('../controllers/orderDetailController');

/// GET LANDING ROUTES ///
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Storee'
    });
});

/// CATEGORY ROUTES ///

// GET request for creating a Category
router.get('/category/create', category_controller.category_create_get);

// POST request for creating Category
router.post('/category/create', category_controller.category_create_post);

// GET request to delete Category
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST request to delete Category
router.post('/category/:id/delete', category_controller.category_delete_post);

// GET request to update Category
router.get('/category/:id/update', category_controller.category_update_get);

// POST request to update Category
router.post('/category/:id/update', category_controller.category_update_post);

// GET request for one Category
router.get('/category/:id', category_controller.category_detail);

// GET request for list of all Categories
router.get('/categories', category_controller.category_list);


/// PRODUCT ROUTES ///

// GET request for creating a Product
router.get('/product/create', product_controller.product_create_get);

// POST request for creating Product
router.post('/product/create', product_controller.product_create_post);

// GET request to delete Product
router.get('/product/:id/delete', product_controller.product_delete_get);

// POST request to delete Product
router.post('/product/:id/delete', product_controller.product_delete_post);

// GET request to update Product
router.get('/product/:id/update', product_controller.product_update_get);

// POST request to update Product
router.post('/product/:id/update', product_controller.product_update_post);

// GET request for one Product
router.get('/product/:id', product_controller.product_detail);

// GET request for list of all Products
router.get('/products', product_controller.product_list);


/// ORDER ROUTES ///

// GET request for creating an Order
router.get('/order/create', order_controller.order_create_get);

// POST request for creating Order
router.post('/order/create', order_controller.order_create_post);

// GET request to delete Order
router.get('/order/:id/delete', order_controller.order_delete_get);

// POST request to delete Order
router.post('/order/:id/delete', order_controller.order_delete_post);

// GET request to update Order
router.get('/order/:id/update', order_controller.order_update_get);

// POST request to update Order
router.post('/order/:id/update', order_controller.order_update_post);

// GET request for one Order
router.get('/order/:id', order_controller.order_detail);

// GET request for list of all Orders
router.get('/orders', order_controller.order_list);


/// ORDERDETAIL ROUTES ///

// GET request for creating an OrderDetail
router.get('/orderdetail/create', orderDetail_controller.orderdetail_create_get);

// POST request for creating OrderDetail
router.post('/orderdetail/create', orderDetail_controller.orderdetail_create_post);

// GET request to delete OrderDetail
router.get('/orderdetail/:id/delete', orderDetail_controller.orderdetail_delete_get);

// POST request to delete OrderDetail
router.post('/orderdetail/:id/delete', orderDetail_controller.orderdetail_delete_post);

// GET request to update OrderDetail
router.get('/orderdetail/:id/update', orderDetail_controller.orderdetail_update_get);

// POST request to update OrderDetail
router.post('/orderdetail/:id/update', orderDetail_controller.orderdetail_update_post);

// GET request for one OrderDetail
router.get('/orderdetail/:id', orderDetail_controller.orderdetail_detail);

// GET request for list of all OrderDetails
router.get('/orderdetails', orderDetail_controller.orderdetail_list);

module.exports = router;