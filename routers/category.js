const express=require('express')
const { addCategoty, getAllCategory } = require('../controllers/category')
const router=express.Router()

router.post('/categories',addCategoty)
router.get('/categories',getAllCategory)
module.exports=router