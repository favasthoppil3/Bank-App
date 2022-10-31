const db=require('./db')

const withdraw=(accno,password,balance)=>{
    // var amount=parseInt(balance)
    return db.User.findOne({accno,password})
    .then(user=>{
        if(user){
            if(user.balance>=balance){
                user.balance=Number(user.balance)-Number(balance)
                user.transaction.push({
                type:"Withdraw",
                transactionamnt:balance,
                currentamnt:user.balance,
                message:"Success",
                date:new Date()

            })
            user.save()
            return{
                statusCode:200,
                status:true,
                message:"Withdraw Amount",
               amount: user.balance,
            }
            }else{
                return{
                    statusCode:422,
                      status:false,
                      message:"Sorry not enough your balance ..."
                  }
            }
            
            
        }else{
            return{
                statusCode:422,
                  status:false,
                  message:"Account incorrect"
              }
        }
    })
}
module.exports={withdraw}
