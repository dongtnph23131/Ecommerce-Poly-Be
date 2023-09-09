const Product = require('../models/product')
exports.createCommentByProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        product.reviews.push({ ...req.body, name: req.user.name, userId: req.user._id,avatar:req.user.avatar })
        product.numOfReviews++
        let avg = 0;

        product.reviews.forEach((rev) => {
            avg += rev.rating;
        });
        product.raitings=avg/(product.reviews.length)
        await product.save()
        return res.status(200).json({
            message: 'Comment thành công',
            data: product
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}