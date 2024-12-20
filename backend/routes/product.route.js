import express from 'express'
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

//routes use logic in controller to preform actions

//api endpoint to get products
router.get("/", getProducts)
  
//api endpoint to create products
router.post("/", createProduct);
  
//api endpoint to update products
router.put("/:id", updateProduct)
  
//api endpoint to delete products
router.delete("/:id", deleteProduct)

export default router;