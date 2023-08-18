const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

app.listen(process.env.PORT, async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-poly', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log(1);
  })
  
})