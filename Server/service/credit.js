Creditdatabase={}


const credit=(name,accountno,pancard,adhar,salary)=>{
    if(accountno in Creditdatabase){
      return {
        statusCode:422,
        status:false,
        message:"Error"
      }
      
    }else
    Creditdatabase[accountno]={
      name:name,
      accno:accountno,
      pan:pancard,
      adhar:adhar,
      salary:salary
    }
    console.log("data",Creditdatabase)
    return {
      statusCode:200,
        status:true,
        message:"Credit successfully"
    }

  }
module.exports={credit}

