const express=require('express')
const { addCategoty, getAllCategory, updateCategory } = require('../controllers/category')
const router=express.Router()

router.post('/categories',addCategoty)
router.get('/categories',getAllCategory)
router.patch('/categories/:id',updateCategory)
module.exports=router