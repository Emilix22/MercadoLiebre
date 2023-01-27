
const Products = require('../models/products');

const products = Products.findAll()

const controller = {

    index: (req, res) => {
        res.render('index', {products});
    }
}

module.exports = controller;