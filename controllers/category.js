const Category = require("../models/category")

exports.addCategoty = async (req, res) => {
    try {
        const data = await Category.create(req.body, { writeConcern: { wtimeout: 20000 } })
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
exports.getAllCategory = async (res, req) => {
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