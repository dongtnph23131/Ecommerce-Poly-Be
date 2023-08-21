const express=require('express')
const { addProduct, getProducts, removeProduct, updateProduct, getProduct } = require('../controllers/product')

const router=express.Router()

router.post('/products',addProduct)
router.get('/products',getProducts)
router.delete('/products/:id',removeProduct)
router.patch('/products/:id',updateProduct)
router.get('/products/:id',getProduct)
module.exports=router