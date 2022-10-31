const db=require("./register")
const data=require("./db")

const deposit=(accno,password,balance)=>{
//  var amount=parseInt(balance)
return data.User.findOne({accno,password}).then(user=>{
  if(user){
    user.balance=Number(user.balance)+Number(balance)
    user.transaction.push({
      type:"deposit",
      transactionamnt:balance,
      currentamnt:user.balance,
      message:"Success",
      date:new Date()
    })
    user.save()
    return{
      statusCode:200,
      status:true,
      message:"Added Amount",
     amount: user.balance,
    //  transaction:db.database[accountnum]["transaction"]
    }
    
  }else{
    return{
      statusCode:422,
        status:false,
        message:"deposit error"
    }
  }

})  


//   console.log("data",db.database)

//     if(accountnum in db.database){
//       if(pass==db.database[accountnum]["pass"]){
//         db.database[accountnum]["balance"]=Number(db.database[accountnum]["balance"])+Number(balance)
//         db.database[accountnum]["transaction"].push({status:"Deposit",DepositAmount:balance,CurrentAmount:db.database[accountnum]["balance"]})
//         return{
//             statusCode:200,
//             status:true,
//             message:"Added Amount",
//             amount:db.database[accountnum]["balance"],
//             transaction:db.database[accountnum]["transaction"]
//       }
//       console.log("amount",db)
//     }else{
//       return{
//         statusCode:422,
//         status:false,
//         message:"password incorrect"
//     }
//     }

//   }
//   else{
//     return{
//         statusCode:422,
//         status:false,
//         message:"Account incorrect"
// }
// }


}

const transaction=(accno)=>{
  return data.User.findOne({accno})
  .then(user=>{
    if(user){
      return{
        statusCode:200,
        status:true,
        Message:"Transcation History",  
        transaction:user.transaction
      }
    }else{
      return{
        statusCode:422,
        status:false,
        message:"Error Transcation History"
      }
    }
  })

  // if(accno in db.database){
  //   return{
  //     statusCode:200,
  //     status:true
      
  //   }
  // }else{
  //   return{
  //     statusCode:400,
  //     status:false
  //   }
  // }
}

module.exports={deposit,transaction}
