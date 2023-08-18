const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 6,
        maxLength: 255
    },
    isDeleteable: {
        type: Boolean,
        default: true
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Product'
        }
    ]
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Category', categorySchema)