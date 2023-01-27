const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/create', productsController.create);

module.exports = router;