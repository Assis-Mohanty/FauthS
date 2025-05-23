const validateUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success:false,
            data:{},
            message:"Something went wrong",
            err:"Email or password is missing "
        })
    }
    next()
}

const validateAdminRequest=(req,res,next)=>{
    if(!req.body.id){
        return res.status(400).json({
            success:false,
            data:{},
            message:"Something went wrong",
            err:"UserId not given "
        })
    }
    next()
}
module.exports={validateUserAuth,validateAdminRequest}