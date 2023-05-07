const { errorHandler } = require("../../../features/error");
import { User } from "../../../models/User";
import { Matcher,generateToken,cookieSeater } from "../../../utils/features";
import { connecgtDB } from "../../../utils/features";

const handler=async(req,res,next)=>{
   
  cookieSeater(res, null,false);
  res.json({
    msg: "Logout Sucessfull",
    sucess:true,

  });
    
}

export default handler