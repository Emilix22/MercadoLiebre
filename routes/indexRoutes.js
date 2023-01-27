const express = require('express');
const router = express.Router();
const indexControler = require('../controllers/indexController');

router.get('/', indexControler.index);

module.exports = router;