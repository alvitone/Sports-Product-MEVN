
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/', productController.createProduct);
router.get('/findall', productController.getProducts); 
//router.get('/',productController.findAll)
//router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProductById);
router.delete('/', productController.deleteProductById);
router.get('/topfive',productController.topFive)
router.get('/avg/a',productController.calSum)


module.exports = router;
