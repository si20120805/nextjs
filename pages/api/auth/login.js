const { errorHandler } = require("../../../features/error");
import { User } from "../../../models/User";
import { Matcher,generateToken,cookieSeater } from "../../../utils/features";
import { connecgtDB } from "../../../utils/features";

const handler=async(req,res,next)=>{
    const {email,password}=req.body; 

    if (!email||!password)  return errorHandler(res, 400, "Enter all the Details ");
   
  await connecgtDB();

  const  user =  await User.findOne({ email });
  if (!user) return errorHandler(res, 400, "Invalid Email and Password");

const isMatch=Matcher(password,user.password)

console.log('isMatch',isMatch)

if(!isMatch){
return errorHandler(res,400,"Invalid Passoword")
}

  
// Generate Token is a fuction to set the Token
  const token = generateToken(user._id);
 // Here cookieSeater is a fuction to set the cookies
  cookieSeater(res, token, true);
  res.json({
    msg: "Welcome Back user",
    sucess:true,
    user

  });
    
}

export default handler