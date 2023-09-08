const Order = require('../models/order')
exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create({...req.body,user:req.user._id})
        return res.status(200).json({
            message: 'Đặt hàng thành công',
            data: order
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}