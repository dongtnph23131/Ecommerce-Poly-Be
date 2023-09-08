const express=require('express')
const { createOrder, getAllOrder } = require('../controllers/order')
const {authenticate}=require('../middlewares/authenticate')
const router=express.Router()
router.post('/orders',authenticate,createOrder)
router.get('/orders',getAllOrder)
module.exports=router