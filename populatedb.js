require('dotenv').config();
const mongoose = require('mongoose');
const async = require('async');
const Category = require('./models/category');
const Product = require('./models/product');
const Order = require('./models/order');
const OrderDetail = require('./models/orderDetail');

// Database connection
mongoose.set("strictQuery", false);

const mongoDB = process.env.DB_URL || "mongodb+srv://thanhse:dfgh1d132sdfe@cluster0.pywdp7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('Connected to MongoDB');
  populateDatabase();
}

// Arrays to hold the created objects
const categories = [];
const products = [];
const orders = [];
const orderDetails = [];

// Function to create Category
async function categoryCreate(name, description) {
  const category = new Category({ name, description });
  try {
    await category.save();
    console.log(`New Category: ${category}`);
    categories.push(category);
  } catch (err) {
    console.error(`Error creating category: ${err}`);
  }
}

// Function to create Product
async function productCreate(name, description, price, category, stock) {
  const productDetail = { name, description, price, category, stock };
  const product = new Product(productDetail);
  try {
    await product.save();
    console.log(`New Product: ${product}`);
    products.push(product);
  } catch (err) {
    console.error(`Error creating product: ${err}`);
  }
}

// Function to create Order
async function orderCreate(customer_name, customer_email, customer_address, status) {
  const orderDetail = { customer_name, customer_email, customer_address, status };
  const order = new Order(orderDetail);
  try {
    await order.save();
    console.log(`New Order: ${order}`);
    orders.push(order);
  } catch (err) {
    console.error(`Error creating order: ${err}`);
  }
}

// Function to create OrderDetail
async function orderDetailCreate(order, product, quantity, price) {
  const orderDetailDetail = { order, product, quantity, price };
  const orderDetail = new OrderDetail(orderDetailDetail);
  try {
    await orderDetail.save();
    console.log(`New OrderDetail: ${orderDetail}`);
    orderDetails.push(orderDetail);
  } catch (err) {
    console.error(`Error creating order detail: ${err}`);
  }
}

async function populateDatabase() {
  console.log('Populating database...');
  await categoryCreate('Electronics', 'Devices and gadgets');
  await categoryCreate('Books', 'Printed and digital books');
  await categoryCreate('Clothing', 'Men and Women clothing');
  await productCreate('iPhone 12', 'Latest Apple iPhone', 999.99, categories[0], 50);
  await productCreate('Harry Potter', 'Famous fantasy book', 19.99, categories[1], 100);
  await productCreate('T-Shirt', 'Plain white T-shirt', 9.99, categories[2], 200);
  await orderCreate('John Doe', 'john@example.com', '123 Main St, City', 'Pending');
  await orderDetailCreate(orders[0], products[0], 1, products[0].price);
  await orderDetailCreate(orders[0], products[1], 2, products[1].price);

  console.log('Database population complete');
  mongoose.connection.close();
}