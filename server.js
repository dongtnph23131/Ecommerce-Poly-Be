const app=require('./app')
const mongoose=require('mongoose')
const dotenv=require('dotenv')


dotenv.config({path:'Server/config/config.env'})

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-poly')



app.listen(process.env.PORT,()=>{
    console.log('Server ok!');
})