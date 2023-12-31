const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    userNameReceive: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    node: {
        type: String
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            productId: {
                type: mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: Number,
        default: 0
    },
    pay: {
        type: Boolean,
        default: false
    },
    totalOrder: {
        type: Number,
        required: true
    },
    payments:{
         type:String,
         required:true
    },
    paidAt: {
        type: Date,
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)
module.exports = mongoose.model('Order', orderSchema)