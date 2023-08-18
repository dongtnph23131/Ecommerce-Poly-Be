const express=require('express')
const { addCategoty } = require('../controllers/category')
const router=express.Router()

router.post('/categories',addCategoty)

module.exports=router