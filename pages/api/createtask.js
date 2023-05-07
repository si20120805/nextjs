import { connecgtDB } from "../../utils/features";
import { Task } from "../../models/Task";
import { errorHandler } from "../../features/error";
import { checkAuth } from "../../utils/features";

const handler=async (req,res)=>{
    if(req.method!=="POST") return  errorHandler(res,400,"Only Post Method")
     await connecgtDB()

     const user= await checkAuth(req)
     if(!user) return errorHandler(res,400,"Login First")
     const {title,description}=req.body
     if(!title||!description) return errorHandler(res,400,'enter both the field')

     
     await Task.create({
        title:title,
        description:description,
        user:user._id
     })

    res.json({
        msg:'Sucessful created',
        sucess:true

    })
    
   
};


export default handler;