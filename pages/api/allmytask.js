import { checkAuth, connecgtDB } from "../../utils/features";
import { Task } from "../../models/Task";
import { errorHandler } from "../../features/error";

const handler=async (req,res)=>{
    if(req.method!=="GET") return  errorHandler(res,400,"Only Get Method")
     await connecgtDB()

     const user= await checkAuth(req)
     console.log('user',user    )

     if(!user) return  errorHandler(res,400,'Login first' )
  
     const todo= await Task.find({user:user._id})
       

    res.json({
        msg:'Showing all the Task',
        todo,
        sucess:true
    })
    
   
};


export default handler;