const Product = require('../models/product')
exports.addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
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
        const excludedFields = ['page', 'limit', 'sort', 'fields', 'search'];
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
        const page = Number(req.query.page) || 1;
        const limit = req.query.limit || 8
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