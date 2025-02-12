const AppError =require("./error-handler")
const {StatusCodes}=require("http-status-codes")

class ClientError extends AppError{
    constructor(name,message,explaintion,statusCode){
        // let errorName =error.name;
        // let explaintion=[];
        // error.errors.forEach((e)=>{
        //     explaintion.push(e.message)
        // })
        super(
            name,
            message,
            explaintion,
            statusCode
        )
    }
}

module.exports=ClientError