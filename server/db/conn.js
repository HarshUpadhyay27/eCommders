const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://harsh:harsh123@cluster0.dkhkv.mongodb.net/shop-api?retryWrites=true&w=majority', {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Connection Sucessfully`)
}).catch(()=>{
    console.log('No Connection')
})
