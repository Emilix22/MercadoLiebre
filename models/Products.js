const fs = require('fs');
const path = require('path');


const Products = {
    fileName: path.join(__dirname, '../dataBase/products.json'),

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
     },

     findAll: function () {
        return this.getData();
    },

     generateId: function () {
        let allProducts = this.findAll();
        let lastProducts = allProducts.pop();
        if(lastProducts){
            return lastProducts.id + 1;
        }
        return 1;
    },

    findByPk: function (id) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(product => product.id == id);
        return productFound;
    },

    findByField: function (field, text) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(product => product[field] == text);
        return productFound;
    },

    create: function (productData) {
        let allProducts = this.findAll();

        let newProduct = {
            id: this.generateId(),
            ...productData,
        };

        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, ' '));
        return newProduct;
    },

    delete: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(product => product.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
        return true;
    }
}

module.exports = Products;