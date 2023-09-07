const express=require('express')
const { addProduct, getProducts, removeProduct, updateProduct, getProduct, getProductsAdmin} = require('../controllers/product')
const {authenticate}=require("../middlewares/authenticate")
const {authorization}=require("../middlewares/authorization")
const router=express.Router()

router.post('/products',authenticate,authorization,addProduct)
router.get('/products',getProducts)
router.delete('/products/:id',authenticate,authorization,removeProduct)
router.patch('/products/:id',authenticate,authorization,updateProduct)
router.get('/products/:id',getProduct)
router.get('/admin/products',getProductsAdmin)
module.exports=router