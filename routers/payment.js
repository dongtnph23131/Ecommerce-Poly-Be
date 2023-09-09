const express=require('express')
const {authenticate}=require("../middlewares/authenticate")
const { checkoutCart } = require('../controllers/payment')
const router=express.Router()

router.post('/checkout',authenticate,checkoutCart)

module.exports=router