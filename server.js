const app=require('./app')
const mongoose=require('mongoose')
const dotenv=require('dotenv')


dotenv.config({path:'config/config.env'})
mongoose.connect('mongodb+srv://dongtimo:20042003@.com@cluster0.muqqkxo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('ok');
})
app.listen(process.env.PORT,()=>{
  console.log('1');
})