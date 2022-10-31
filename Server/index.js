const express= require('express')
const DataService= require('./service/register')
const DataCredit= require('./service/credit')
const Deposit= require('./service/Deposit')
const Withdraw= require('./service/withdraw')
const transactionpage= require('./service/Deposit')
// const databaseacc= require('./service/register')
const cors=require('cors')
const jwt=require('jsonwebtoken')

const app= express()

app.use(cors({
    origin:'http://localhost:4200'
}))

app.use(express.json())

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

const appmiddleware=(req,res,next)=>{
    console.log("Application specific middlware")
    next()
}
app.use(appmiddleware)

const jwtmiddleware=((req,res,next)=>{
    const token= req.header('x-access-token')
    console.log(token)
    const data=jwt.verify(token,'supersecretkey@123')
    console.log(data)
    if(req.body.accountnum== data.currentaccountno){
        next()
    }
})

app.post('/register',(req,res)=>{
    DataService.register(req.body.accountnum,req.body.uname,req.body.pass,req.body.balance)
    .then(result=>{
    res.status(result.statusCode).json(result)
    })
})
app.post('/credit',(req,res)=>{
    const reqst=DataCredit.credit(req.body.name,req.body.accountno,req.body.pan,req.body.adhar,req.body.salary)
    res.status(reqst.statusCode).json(reqst)

})

app.post('/deposit',jwtmiddleware,(req,res)=>{
    Deposit.deposit(req.body.accountnum,req.body.pass,req.body.balance)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/withdraw',jwtmiddleware,(req,res)=>{
    Withdraw.withdraw(req.body.accountnum,req.body.pass,req.body.balance)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/login',(req,res)=>{
    DataService.login(req.body.accountnum,req.body.pass)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
    })

app.post('/transaction',(req,res)=>{
    transactionpage.transaction(req.body.accountnum)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
        
    })

app.delete('/deleteac/:accno',(req,res)=>{
    DataService.deleteacc(req.params.accno)
    .then(result=>{
        // console.log(result)
        res.status(result.statusCode).json(result)
    })
})
  
