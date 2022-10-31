const mongoose=require('mongoose')

const mongoDb="mongodb://127.0.0.1:27017/BankApp"

mongoose.connect(mongoDb,{useNewUrlParser:true})

const User= mongoose.model("User",{
    accno:Number,
    username:String,
    password:String,
    balance:Number,
    transaction:Array
})

module.exports={User}