
const Products = require('../models/Products');

const products = Products.findAll()

const controller = {

    index: (req, res) => {
        res.render('index', {products});
    }
}

module.exports = controller;