const { errorHandler } = require("../../../features/error");
import { User } from "../../../models/User";
import {checkAuth } from "../../../utils/features";



const handler=async(req,res,next)=>{
   if( req.method!=='GET') return errorHandler(res,400,'Only get method is required ') 

   const user= await checkAuth(req)
   console.log('user',user)
   
   if(!user) return errorHandler(res,400,"Login First")

 

  res.json({
    msg: "Welcome Back user",
    sucess:true,
    user

  });
    
}

export default handler