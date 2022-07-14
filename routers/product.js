const express = require("express");
const router = express.Router();

const productController = require('../controllers/product');
const upload            = require('../middleware/upload');


router.get('/', productController.create);
// router.post('/add', upload.single('Image'), productController.store);
router.post('/add', productController.store);

module.exports = router;
