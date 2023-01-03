let articulos = [
    {
        id: 1,
        imagen: "/img/img-cafetera-moulinex.jpg",
        precio: '$6.770',
        descuento: '40% OFF',
        nombre: 'Cafetera Moulinex'
    },
    {
        id: 2,
        imagen: "/img/img-macbook-pro-2019.jpg",
        precio: '$230.000',
        descuento: '20% off',
        nombre: 'MacBook Pro 2019'
    },
    {
        id: 3,
        imagen: "/img/img-samsung-galaxy-s10.jpg",
        precio: '$70.500',
        descuento: '10% off',
        nombre: 'Samsung Galaxy S10'
    },
    {
        id: 4,
        imagen: "/img/img-tv-samsung-smart.jpg",
        precio: '$23.200',
        descuento: '5% off',
        nombre: 'SmartTv Samsung 43\'\''
    }
]

const controller = {

    index: (req, res) => {
        res.render('index', {articulos});
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