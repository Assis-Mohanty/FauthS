const express=require("express");

const UserController=require("../../controllers/user-controller")
const {AuthRequestValidator}=require("../../middlewares/index")
const router=express.Router();

router.post("/signup",AuthRequestValidator.validateUserAuth,UserController.create)
router.post("/signin",AuthRequestValidator.validateUserAuth,UserController.signIn)


router.get("/isAuthenticated",UserController.isAuthenticated)

router.get("/dummy",(req,res)=>{
    return res.status(200).json({message:"OK"})
})

router.get("/isAdmin",AuthRequestValidator.validateAdminRequest,UserController.isAdmin)

module.exports=router;