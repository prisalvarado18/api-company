// 5 functions that work with the DB
import Product from "../models/Product";

export const createProduct = async (req, res) => {
    // Destructuring
    // From req.body Im going to extract:
    const { name, category, price, imgURL } = req.body;
    const newProduct = new Product({ name, category, price, imgURL });
    // Save New Product
    const productSaved = await newProduct.save();
    // Return it to the client
    // Specify status code
    // 201: a new resource has been created
    res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
    // Use product model and find all of data
    // Return a list of products
    const products = await Product.find();
    // This will be returned to th client
    res.json(products);
};

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(updatedProduct);
}

export const deleteProductById = async (req, res) => {
    // We extract from req.params the productId
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    // await Product.findByIdAndDelete(req.params.productId);
    res.status(204).json();
};
