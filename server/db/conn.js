const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shop-api', {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Connection Sucessfully`)
}).catch(()=>{
    console.log('No Connection')
})