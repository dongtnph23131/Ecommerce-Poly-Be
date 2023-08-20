const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar:{
        type:String,
        require:true
    },
    role: {
        type: String,
        default: "member"
    },
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: String
    },
    passwordChangeAt: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})
module.exports=mongoose.model('User',userSchema)