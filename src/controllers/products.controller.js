// 5 functions that work with the DB
import Product from "../models/Product";

export const createProduct = (req, res) => {
    console.log(req.body);
    res.json('Creating product');
};

export const getProducts = (req, res) => {
    res.json('Getting products');
};

export const getProductById = (req, res) => {

};

export const updateProductById = (req, res) => {

};

export const deleteProductById = (req, res) => {

};