const express=require('express')
const { createOrder } = require('../controllers/order')
const {authenticate}=require('../middlewares/authenticate')
const router=express.Router()
router.post('/orders',authenticate,createOrder)
module.exports=router