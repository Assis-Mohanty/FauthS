const {StatusCodes}=require("http-status-codes")
class AppError extends Error{
    constructor(
        name="AppError",
        message="Something went wrong",explaintion="Something went wrong",
        statusCode=StatusCodes.INTERNAL_SERVER_ERROR
    
    ){
        super()
        this.message=message,
        this.name=name,
        this.explaintion=explaintion,
        this.statusCode=statusCode
    }

}

module.exports=AppError;