const Category = require("../models/category")
const Product = require("../models/product")
exports.addCategoty = async (req, res) => {
    try {
        const data = await Category.create(req.body)
        return res.status(200).json({
            message: 'Thêm danh mục sản phẩm thành công',
            data: data
        })
    }
    catch (error) {
        return res.status(400).json({
            message: 'Thêm danh mục sản phẩm thất bại',
            error: error.message
        })
    }
}
exports.getAllCategory = async (req, res) => {
    try {
        const data = await Category.find()
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
exports.updateCategory = async (req, res) => {
    try {
        const id = req.params.id
        const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return res.status(200).json({
            message: "Cập nhập danh mục sản phẩm thành công",
            updateCategory
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        await Product.updateMany({ categoryId: id }, {
            categoryId: null
        })
        const category = await Category.findByIdAndDelete(id)
        if (!category) {
            return res.status(400).json({
                message: "Không tìm thấy danh mục sản phẩm nào"
            })
        }
        return res.status(200).json({
            message: "Xóa danh mục sản phẩm thành công"
        })
    }
    catch (error) {
        res.status(400).json({
            message: "Xóa danh mục sản phẩm thất bại",
            error: error.message
        })
    }
}
exports.getOne = async (req, res) => {
    try {
        const id = req.params.id
        const category = await Category.findById(id).populate("products")
        if (!category) {
            return res.status(200).json({
                message: "Không tìm thấy danh mục sản phẩm nào"
            })
        }

        return res.status(200).json(category)
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}