const express=require('express')
const { addProduct, getProducts } = require('../controllers/product')

const router=express.Router()

router.post('/products',addProduct)
router.get('/products',getProducts)
module.exports=router