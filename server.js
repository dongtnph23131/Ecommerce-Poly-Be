const app=require('./app')
const mongoose=require('mongoose')
const dotenv=require('dotenv')


dotenv.config({path:'config/config.env'})

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-poly', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})



app.listen(process.env.PORT,()=>{
    console.log('Server ok!');
})