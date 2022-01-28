const Product = require("../models/products");

function listProducts(req, res) {
    let data = req.body;
    Product.listProducts(data, function(err, result) {
        if(err) {
            console.log(err);
            return res.status(500).send({message: "Not ok!"});
        }
        return res.status(200).send({
            success: true,
            msg: "Successfully fetched products",
            products: result
        })
    })
}

function addProduct(req, res){
    let data = req.body;
    if(data.name && data.price && data.description && data.categoryId && data.vendorId){
        Product.addProduct(data , function(err, result){
            if(err){
                console.log(err);
                return res.status(500).send({message: "Not Ok!"});
            }
            return res.status(200).send({
                success:true,
                msg: "Successfully Added Products!",
                products : result
            })
        })
    }
}

module.exports = {listProducts, addProduct};