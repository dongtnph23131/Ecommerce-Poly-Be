const express = require('express')
const { addCategoty, getAllCategory, updateCategory, remove, getOne } = require('../controllers/category')
const { authenticate } = require('../middlewares/authenticate')
const { authorization } = require('../middlewares/authorization')
const router = express.Router()

router.post('/categories', authenticate,authorization, addCategoty)
router.get('/categories', getAllCategory)
router.patch('/categories/:id',authenticate,authorization, updateCategory)
router.delete('/categories/:id', authenticate,authorization,remove)
router.get("/categories/:id",getOne)
module.exports = router