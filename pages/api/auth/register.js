import { errorHandler } from "../../../features/error";
import { User } from "../../../models/User";
import { connecgtDB,
    cookieSeater,
    generateToken } from "../../../utils/features";

   const handler=async(req,res)=>{




if (req.method !== "POST") return errorHandler(res, 400, "Only Post Method");
  const { name, email, password } = req.body;

  if (!email || !name || !password)
    return errorHandler(res, 400, "Enter all the Details ");
  await connecgtDB();

  let user =  await User.findOne({ email });
  if (user) return errorHandler(res, 400, "User already register");
   user = await User.create({
    name,
    email,
    password,
  });
// Generate Token is a fuction to set the Token
  const token = generateToken(user._id);
 // Here cookieSeater is a fuction to set the cookies
  cookieSeater(res, token, true);
  res.json({
    msg: "sucessful generate the Token",
    sucess:true
  });
    
 
};

export default handler
