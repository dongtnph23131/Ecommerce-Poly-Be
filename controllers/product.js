const Product = require('../models/product')
const Category = require("../models/category")
exports.addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id
            }
        })
        return res.status(200).json({
            message: 'Thêm sản phẩm thành công',
            data: product
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
exports.getProducts = async (req, res) => {
    try {
        const queryObj = { ...req.query };
        const excludedFields = ['page', 'limit', 'sort', 'fields', 'search', 'categoryId'];
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

        let products = Product.find(JSON.parse(queryStr))
        if (req.query.sort) {
            products = products.sort(req.query.sort)
        }
        else {
            products = products.sort('createdAt')
        }
        if (req.query.search) {
            products = products.where(
                { name: { $regex: req.query.search, $options: 'i' } }
            )
        }
        if (req.query.categoryId) {
            console.log(req.query.categoryId);
            products = products.where(
                { categoryId: req.query.categoryId }
            )
        }
        const page = Number(req.query.page) || 1;
        const limit = req.query.limit || 4
        const skip = limit * (page - 1);
        products = products.skip(skip).limit(limit)
        const data = await products;
        return res.status(200).json({
            data: data
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
exports.removeProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (product) {
            await Product.findByIdAndDelete(req.params.id)
            await Category.findByIdAndUpdate(product.categoryId, {
                $pull: {
                    products: product._id
                }
            })

        }
        return res.status(200).json({
            message: "Xóa sản phẩm thành công",
            product
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return res.status(200).json({
            message: "Cập nhập sản phẩm thành công",
            updateProduct
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate({ path: 'categoryId', select: 'name' })
        if (product) {
            return res.status(200).json({
                data: product
            })
        }
        else {
            return res.status(200).json({
                message: 'Không tìm thấy sản phẩm nào'
            })
        }
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
exports.getProductsAdmin= async (req, res) => {
    try {
        const queryObj = { ...req.query };
        const excludedFields = ['page', 'limit', 'sort', 'fields', 'search', 'categoryId'];
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

        let products = Product.find(JSON.parse(queryStr))
        if (req.query.sort) {
            products = products.sort(req.query.sort)
        }
        else {
            products = products.sort('createdAt')
        }
        if (req.query.search) {
            products = products.where(
                { name: { $regex: req.query.search, $options: 'i' } }
            )
        }
        if (req.query.categoryId) {
            products = products.where(
                { categoryId: req.query.categoryId }
            )
        }
        const data = await products;
        return res.status(200).json({
            data: data
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}