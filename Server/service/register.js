// const database={}
const jwt = require('jsonwebtoken')
const db = require('./db')

const register = (accno, username, password, balance) => {

  return db.User.findOne({ accno }).then(user => {
    console.log("user", user)
    if (user) {
      return {
        statusCode: 422,
        status: false,
        message: "Already Exist"
      }
    } else {
      const newUser = new db.User({
        accno,
        username,
        password,
        balance,
        transaction: []
      })
      newUser.save()
      return {
        statusCode: 200,
        status: true,
        message: "Register successfully"
      }
    }
  })


  // if(accountnum in database){
  //   return {
  //     statusCode:422,
  //     status:false,
  //     message:"Already Exist"

  //   }
  // }else{
  //     database[accountnum]={
  //     uname,
  //     accountnum,
  //     pass,
  //     balance,
  //     transaction:[]

  //   }
  //   console.log(database)
  //   return {
  //     statusCode:200,
  //     status:true,
  //     message:"Register successfully"

  //   }
  // }


}
const login = (accountnum, password) => {
  return db.User.findOne({ accno: accountnum, password: password })
    .then(user => {
      if (user) {
        accountno = user.accno
        username = user.username
        balance = user.balance
        const token = jwt.sign({
          currentaccountno: accountno
        }, 'supersecretkey@123')
        return {
          statusCode: 200,
          status: true,
          message: "Login success",
          token,
          currentaccountno: accountno,
          username: username,
          balance: balance
        }
      } else {
        return {
          statusCode: 422,
          status: false,
          message: "Login Error",
        }
      }
    })




  // if(accountnum in database){
  //   if(password==database[accountnum]["pass"]){
  //     currentname=database[accountnum]["uname"]
  //     currentaccount=database[accountnum]["accountnum"]
  //     console.log("db",database)
  //     const token= jwt.sign({
  //       currentaccountno:accountnum
  //     },'supersecretkey@123')
  //     return {
  //       statusCode:200,
  //       status:true,
  //       message:"Login Success",
  //       currentaccount,
  //       currentname,
  //       token

  //     }
  //   }else{
  //     return {
  //       statusCode:422,
  //       status:false,
  //       message:"Login Error",
  //     }
  //   }
  // }else{
  //   return{
  //     statusCode:422,
  //       status:false,
  //       message:"Login Error",
  //   }
  // }
}

const deleteacc = (accno) => {
  return db.User.deleteOne({ accno })
    .then(user => {
      if (user) {
        return {
          status: true,
          message: "Delete Account",
          statusCode: 200
        }
      } else {
        return {
          status: false,
          statusCode: 422,
          message: "Not Delete Account"
        }
      }
    })
}

module.exports = { register, login, database, deleteacc }