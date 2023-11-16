const jwt = require('jsonwebtoken')
exports.sendcookie = (user,res,message,statusCode=200) =>{
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);

    res.status(statusCode).cookie("token",token,{
        httpOnly: true,
        maxAge: 1800000,  
        sameSite: process.env.NODE_ENV === "Development" ? "lax" :"none",
        secure:process.env.NODE_ENV === "Development" ? false : true,
    }).json({
        success:true,
        message: message
    })
}