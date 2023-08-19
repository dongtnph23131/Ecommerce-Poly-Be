const User=require('../models/user')
const bcrypt=require('bcryptjs')
exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExits = await User.findOne({ email: email })
        if (userExits) {
            return res.status(400).json({
                message: "Email đã được đăng ký"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name, email, password: hashPassword
        })
        user.password = undefined

        return res.status(200).json({
            message: "Đăng ký thành công",
            user
        })
    }
    catch (error) {
        res.status(400).json({
            message: "Đăng ký thất bại",
            error: error.message
        })
    }
}