// This file will be used to have the endpoints 
// related to products, that is:
// 1. Create products
// 2. Delete products
// 3. List products
// Obtain a single product

import { Router } from 'express'; 
const router = Router();

//import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/products.controller';
import * as productsCtrl from '../controllers/products.controller';
import { verifyToken } from '../middlewares';
// When someone visits get /products I want you to use
// certain method
router.post('/', verifyToken, productsCtrl.createProduct); 
router.get('/', productsCtrl.getProducts); 
router.get('/:productId', productsCtrl.getProductById); 
router.put('/:productId', verifyToken, productsCtrl.updateProductById); 
router.delete('/:productId', verifyToken, productsCtrl.deleteProductById); 

export default router;