const UserRepository=require("../repository/user-repository")
const jwt=require("jsonwebtoken")
const {JWT_KEY}=require("../config/serverConfig")
const bcrypt=require("bcrypt");
const AppError = require("../utils/error-handler");

class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }
    async create(data){
        try {
            const user=await this.userRepository.create(data);
            return user;
        } catch (error) {
            if(error.name=="SequelizeValidationError"){
                throw error;
            }
            console.log("Something went in the service layer")
            throw error
        }
    }
    

    async isAuthenticated(token){
        try {
            const response=this.verifyToken(token);
            if(!response){
                throw {error:"Invalid token"}
            }
            const user=this.userRepository.getById(response.id)
            if(!user){
                throw {error:"No user with the corresponding token exists"};
            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in the auth process");
            throw error
        }
    }

    async signIn(email,plainPassword){
        try {
            const user=await this.userRepository.getByEmail(email)
            const passwordMatch=this.checkPassword(plainPassword,user.password);
            if(!passwordMatch){
                console.log("Password doesnt match")
                throw {error:"Incorrect password"}
            }
            const newJWT=this.createToken({email:user.email,id:user.id});
            return newJWT
            
        } catch (error) {
            if(error.name=="EmailNotFound"){
                throw error
            }
            console.log("Something went wrong in the sign in process")
            throw error
        }
    }
    createToken(user){
        try {
            const result=jwt.sign(user,JWT_KEY,{expiresIn:"1d"})
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation")
            throw error
        }
    }
    verifyToken(token){
        try {
            const response=jwt.verify(token,JWT_KEY);
            return response
        } catch (error) {
            console.log("Something went wrong in token validation",error)
            throw error
        }
    }
    checkPassword(userInputPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPassword,encryptedPassword)
            
        } catch (error) {
            console.log("Something went wrong in password comparison")
            throw error
        }
    }
    
    async isAdmin(userId){
        try {
            return this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw error;
        }
    }

}

module.exports=UserService;