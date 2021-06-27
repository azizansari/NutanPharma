const { Product } = require('../models/product/product')
const { User } = require('../models/user/user')
const {Medicines} = require('../models/medicine')
const {Categories} = require('../models/category')
const {Brands} = require ('../models/brand')
const { Orders } = require('./orders')
module.exports = {
    'users': 'db_users',
    'products': Product,
    'users': User,
    'medicine' : Medicines,
    'categories' : Categories,
    'brands' : Brands,
    'orders' : Orders
}