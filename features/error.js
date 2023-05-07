export const errorHandler=(res,statusCode=500,message="Internal Error")=>{

    res.status(statusCode).json({
        msg:message,
        
            })
}