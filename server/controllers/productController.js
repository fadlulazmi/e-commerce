const Product = require('../models/product')

class ProductController {
    static create(req, res){
        Product.create({
            itemName : req.body.itemName,
            stock : req.body.stock,
            price : req.body.price,
            img : req.body.img,
        })
            .then(product => {
                res.status(201).json(product)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }
    static readAll(req, res){
        Product.find({})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static detail(req, res){
        Product.findById(req.params.id)
            .then(product => {
                if(product){
                    res.status(200).json(product)
                } else {
                    res.status(404).json(product)
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static update(req, res){
        let obj = {}
        let {itemName, stock, price, img} = req.body
        if(itemName) obj.itemName = itemName
        if(stock) obj.stock = stock
        if(price) obj.price = price
        if(img) obj.img = img

        Product.findByIdAndUpdate(req.params.id, obj)
            .then(update => {
                res.status(200).json(update)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static delete(req, res){
        Product.findByIdAndDelete(req.params.id)
            .then(deleted => {
                res.status(200).json(deleted)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = ProductController