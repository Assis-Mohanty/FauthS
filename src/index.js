const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const {PORT}=require("./config/serverConfig")
const apiRoutes=require("./routes/index");
const UserRepository=require("./repository/user-repository")
const UserService=require("./services/user-service")
const prepareAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use("/api",apiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Server started on Port: ${PORT}`);
    })
    const us=new UserService();
    // const newToken=us.createToken({email:"qqq@22sd.com",id:"ansdk"})
    // console.log("new token is ",newToken)
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InFxcUAyMnNkLmNvbSIsImlkIjoiYW5zZGsiLCJpYXQiOjE3MzkzNDEyMDIsImV4cCI6MTczOTM0MTIzMn0.K290IC-7e16ffiFmIyQpIdTElrkh-7hRobFHFS0fh4E"
    // const res=us.verifyToken(token)
    // console.log(res)
    // const res=us.checkPassword("qqq","$2b$10$0UoabVn5HNJLiepDD.Q1rO6kAdJZgjkyxGYn33/A5lX04yKaVpQ92")
    // return res
}

prepareAndStartServer();