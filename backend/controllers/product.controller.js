import mongoose from "mongoose";
import Product from "../models/Product.model.js";

export const getProducts = async (req, res) => {
    //get products in database, find({}) with empty object means get all products in database
    try {
      const products = await Product.find({})
      res.status(200).json({sucess: true, data: products});
    } catch (error) {
      console.log("error fetching products", error.message);
      res.status(500).json({sucess: true, message: "Server error"});
    }
  }

export const createProduct = async (req, res) => {
    //user will send this data
    const product = req.body;
  
    //if any part of product schema not provided, responds with fail message
    if(!product.name || !product.price || !product.image) {
      return res.status(400).json({ sucess: false, message: "Please provide all fields"});
    }
  
    //if everything is provided, creates new product in collection using model and product body user provided
    const newProduct = new Product(product);
  
    //saves product to database, returns error if server fails
    try {
      await newProduct.save();
      res.status(201).json({sucess: true, data: newProduct});
    } catch (error) {
      console.error("Error in Create Product:", error.message);
      res.status(500).json({sucess: false, message: "Server Error"});
    }
  }

export const updateProduct = async (req, res) => {
    //get id of product by destructuring url
    const {id} = req.params;
    //gets fields of the product to be updated
    const product = req.body;
  
    //handles product id not found (404)
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({sucess:false, message:"Invalid Product Id"})
    }
  
    //update product with new parameters, new: true returns the updated product. Without it you receive the product before update
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true})
      res.status(200).json({sucess: true, data: updatedProduct});
    } catch (error) {
      res.status(500).json({sucess: false, message: "Server error"});
    }
  }

export const deleteProduct = async(req, res) => {
    //get id of product by destructuring url
    const {id} = req.params
    
    //handles product id not found (404)
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({sucess:false, message:"Invalid Product Id"})
    }
  
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({sucess: true, message: "Product deleted"});
    } catch (error) {
      console.log("error deleting product", error.message)
      res.status(500).json({sucess: false, message: "Server error"});
    }
  }