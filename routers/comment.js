const express=require('express')
const {authenticate}=require("../middlewares/authenticate")
const { createCommentByProduct } = require('../controllers/comment')
const router=express.Router()

router.post('/comments/:id',authenticate,createCommentByProduct)

module.exports=router