import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true // adds createdAt, updatedAt fields to each document in collection
});

//creates Product colletion and uses that collection to store documents (i.e. products)
const Product = mongoose.model('Product', productSchema);

export default Product;