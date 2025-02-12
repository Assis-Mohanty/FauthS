const AppError =require("./error-handler")
const {StatusCodes}=require("http-status-codes")

class ValidationError extends AppError{
    constructor(error){
        let errorName =error.name;
        let explaintion=[];
        error.errors.forEach((e)=>{
            explaintion.push(e.message)
        })
        super(
            errorName,
            "Not able to validate the data sent in the request",
            explaintion,
            StatusCodes.BAD_REQUEST
        )
    }
}

module.exports=ValidationError