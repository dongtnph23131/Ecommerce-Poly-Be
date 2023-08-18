const app=require('./app')
const mongoose=require('mongoose')
const dotenv=require('dotenv')


dotenv.config({path:'config/config.env'})

app.listen(process.env.PORT,async ()=>{
   await mongoose.connect('mongodb://localhost:27017/ecommerce-poly', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})