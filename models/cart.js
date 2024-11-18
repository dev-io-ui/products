const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

module.exports = class {

    static addProduct(id, productPrice) {
        // fetch privious cast
        fs.readFile(p, (err, filecontent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(filecontent);
            }
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct =cart.products[existingProductIndex];
            let updataedProduct;
            if (existingProduct) {
                updataedProduct = { ...existingProduct };
                updataedProduct.qty = updataedProduct.qty + 1;
                cart.products=[...cart.products];
                cart.products[existingProductIndex]=updataedProduct;
            }
            else {
                updataedProduct = { id: id, qty: 1 };
                cart.products =[...cart.products,updataedProduct];
            }
            cart.totalPrice = cart.totalPrice.productPrice;
            
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err);
            })
        })
    }
}