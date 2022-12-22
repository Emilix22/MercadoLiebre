const express = require('express');
const router = express.Router();
const indexControler = require('../controllers/indexController');

router.get('/', indexControler.index);

router.get('/register', indexControler.register);
    
router.get('/login', indexControler.login);
    
router.get('/productCreate', indexControler.productCreate);

module.exports = router;