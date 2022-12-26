
const controller = {

    index: (req, res) => {
        res.render('index');
    },
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    },
    productCreate: (req, res) => {
        res.render('productCreate');
    }
}

module.exports = controller;