import mongoose from "mongoose";
import { serialize } from "cookie";
const Jwt=require('jsonwebtoken')
import { User } from "../models/User";

export const connecgtDB=async()=>{

    const {connection}= await mongoose.connect('mongodb+srv://siddharth:razer123@cluster0.6ghk3ii.mongodb.net/Nextjs?retryWrites=true&w=majority')

  
    console.log(`connection ${connection.host}`)
}


export const  cookieSeater=(res,token,set)=>{
    // const token='sdfsdf'

    res.setHeader("set-Cookie",serialize("token",set ?token:"",{path:'/', httpOnly:true,maxAge:set ?15*24*60*60*1000:0}))


}

export const  generateToken=(_id)=>{

    return Jwt.sign({_id},'dssssssssssssssssssssssss')
    }

    export const  Matcher=(oldPasswrod,NewPassword)=>{

        if (oldPasswrod===NewPassword){

            return true
        }
    }

    export const  checkAuth=async(req)=>{

        const cookie= req.headers.cookie
        if(!cookie) return null
        const token=cookie.split('=')[1]
      

       const decoded= Jwt.verify(token,'dssssssssssssssssssssssss')
    return await User.findById(decoded._id)
    }
