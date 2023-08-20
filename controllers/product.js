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
