const Product = require('../models/product');


class productController {

    create(req, res, next) {
        res.render('add');
    }

    store = (req, res, next) => {

        const product = new Product({
            productName: req.body.Name,
            price: req.body.Price,
            description: req.body.Description,
            size: req.body.Size,
            color: req.body.Color,
            catagoryName: req.body.CatagoryName,
            image: req.body.Image
        });
        
        
        // if (req.file) {
        //     product.image = req.file.path
        // }
        // console.log(product);
        product
            .save()
            .then(() => res.redirect('products/index'))
            .catch((error) => { });
    }

    
}

module.exports = new productController();
