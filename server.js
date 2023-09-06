const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

app.listen(process.env.PORT, async () => {
  await mongoose.connect('mongodb+srv://donghaha:123456abc@ecommerce.ylijltl.mongodb.net/ecommerce_poly?retryWrites=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})