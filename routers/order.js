const express=require('express')
const { createOrder, getAllOrder, getOrderDetail } = require('../controllers/order')
const {authenticate}=require('../middlewares/authenticate')
const router=express.Router()
router.post('/orders',authenticate,createOrder)
router.get('/orders',getAllOrder)
router.get('/orders/:id',getOrderDetail)
module.exports=router