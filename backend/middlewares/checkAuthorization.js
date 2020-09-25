const jsonWebToken=require('jsonwebtoken');
const secretKey="ecommerce";

var checkAuthorization=(request,response,next)=>{

    //extract token from authorization property
    var tokenString=request['headers'].authorization;
    
    //if token is not available
    if(tokenString===undefined){
        return response.json({"message":"token not found"})
    }
    
    //if token is found ,extract token from tokenString
    var token=tokenString.slice(7,tokenString.length)
    
    //check validity of token
    jsonWebToken.verify(token,secretKey,(error,decoded)=>{
        if(error){
            return response.json({"message":"token expired"})
        }

        //forward to next handler
        next();
    })
}

//export this middleware
module.exports=checkAuthorization;