const express=require('express')
const bodyParser=require('body-parser')
const mongoClient=require('mongodb').MongoClient
const checkUserName=require('../middlewares/checkUserName')
const bcrypt=require('bcrypt')
const jsonWebToken=require('jsonwebtoken')
const request=require('request')
const checkAuthor=require('../middlewares/checkAuthorization')
const userRoute=express.Router()

var accountSid = 'XXXXXX'; // Your Account SID from www.twilio.com/console
var authToken = 'XXXXXXX';   // Your Auth Token from www.twilio.com/console

var client = require('twilio')(accountSid, authToken);


var url="mongodb+srv://XXXXXXXX:XXXXXXXX@cluster0-hz86r.mongodb.net/test?retryWrites=true&w=majority";
var dbc;
var collectionObject;
mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log(err)
    }
    else{
        dbc=client.db('XXXXXXXX')
        collectionObject=dbc.collection('userCollection');
        console.log('Connected to DataBase...')
    }
})

userRoute.use(bodyParser.json())

userRoute.get('/usersDetails',(req,response,next)=>{
    collectionObject.find().toArray((err,userDetails)=>{
        if(err){
            return next(err);
        }
        if(userDetails.length===0){
            response.json({"message":"no users exist","userDetails":null})
        }
        else{
            response.json({"message":"users are...","userDetails":userDetails})
        }
    })
})

userRoute.post('/checkUser',checkUserName,(req,response,next)=>{
    response.json({"message":"username is OK"})
})
userRoute.post('/register',checkUserName,(req,response,next)=>{
    bcrypt.hash(req.body.password,6,(err,hashedPassword)=>{
        if (err) {
            return next(err);
        }
        else{
            collectionObject.insertOne({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                mobile:req.body.mobile,
                userName:req.body.userName,
                password:hashedPassword,
                dateOfBirth:req.body.dateOfBirth,
                gender:req.body.gender,
                profilePic:req.body.profilePic
            },(err,success)=>{
                if(err){
                    console.log(err)
                }
                else{
                    response.json({"message":" User registered successfully "});
                }
            })
        }
    })
    
})

//JWT token
var secretKey="ecommerce";
userRoute.post('/login',(req,response,next)=>{
    
    collectionObject.find({userName:req.body.userName}).toArray((err,userObjectArray)=>{
        if(err){
            return next(err);
        }
        else if(userObjectArray.length===0){
            response.json({"message":"invalid username"})
        }
        else{
            //compare passwords
            bcrypt.compare(req.body.password,userObjectArray[0].password,(err,result)=>{
                if(err){
                    return next(err);
                }
                else if(result===false){
                    response.json({"message":"invalid password"})
                }
                else{
                    //send JSONwebtoken(JWT)
                    jsonWebToken.sign({userName:userObjectArray[0].userName},secretKey,{expiresIn:3600},(err,token)=>{
                        if(err){
                            return next(err);
                        }
                        else{
                            response.json({"message":"Login Success",
                                            "token":token,
                                            "userDetails":userObjectArray
                                        })
                        }
                    })
                }
            })
        }
    })
})

userRoute.post('/forgotpassword',(req,res,next)=>{
    console.log(req.body)
    collectionObject.find({userName:req.body.userName}).toArray((err,userArray)=>{
        if(err){
            next(err)
        }
        else{
            if(userArray.length===0){
                res.json({message:"user not found"})
            }
            else{

                jsonWebToken.sign({userName:userArray[0].userName},secretKey,{expiresIn:3600},(err,token)=>{
                    if(err){
                     next(err);
                    }
                    else{
                        var OTP=Math.floor(Math.random()*99999)+11111;
                        console.log(OTP)
                        
                        client.messages.create({
                            body: OTP,
                            from: '+17345488124', // From a valid Twilio number
                            to: userArray[0].mobile,  // Text this number
  
                        })
                        .then((message) => {
                            console.log(message.sid)
                            dbc.collection('OTPCollection').insertOne({
                                OTP:OTP,
                                userName:userArray[0].userName,
                                OTPGeneratedTime:new Date().getTime()+30000
                        },(err,success)=>{
                            if(err){
                                next(err)
                            }
                            else{                                        
                                res.json({"message":"user found",
                                    "token":token,
                                    "OTP":OTP,
                                    "userName":userArray[0].userName
                                })
                            }
                        })
                        });

                    }
                    
                })
            }
        }
    })
})

//verify OTP
userRoute.post('/verifyotp',(req,res,next)=>{
    console.log(req.body)
    console.log(new Date().getTime())
    var currentTime=new Date().getTime()
    dbc.collection('OTPCollection').find({"OTP":req.body.OTP}).toArray((err,OTPArray)=>{
        if(err){
            next(err)
        }
        else if(OTPArray.length===0){
            res.json({"message":"invalidOTP"})
        }
        else if(OTPArray[0].OTPGeneratedTime < req.body.currentTime){
            dbc.collection('OTPCollection').deleteOne({OTP:req.body.OTP},(err,success)=>{
                if(err){
                    next(err);
                }
                else{
                    console.log(OTPArray)
                    res.json({"message":"session expired"})
                }
            })
            
        }
        else{
            
            dbc.collection('OTPCollection').deleteOne({OTP:req.body.OTP},(err,success)=>{
                if(err){
                    next(err);
                }
                else{
                    console.log(OTPArray)
                    res.json({"message":"verifiedOTP"})
                }
            })
        }
    })
})

//changing password
userRoute.put('/changepassword',(req,res,next)=>{
    console.log(req.body)
    bcrypt.hash(req.body.password,6,(err,hashedPassword)=>{
        if (err) {
            next(err)
        } else {
            console.log(hashedPassword)
            collectionObject.updateOne({userName:req.body.userName},{$set:{
                password:hashedPassword
            }},(err,success)=>{
                if(err){
                    next(err)
                }
                else{
                    res.json({"message":"password changed"})
                }
            }) 
        }
    })
    
})

userRoute.put('/edit',(req,response,next)=>{
    collectionObject.updateOne({userName:req.body.userName},{$set:{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        mobile:req.body.mobile,
        dateOfBirth:req.body.dateOfBirth,
        gender:req.body.gender
    }},(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            collectionObject.find({userName:req.body.userName}).toArray((err,userDetails)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"message":"users are...","userDetails":userDetails})
                }
            })
        }
    })
})

userRoute.use((err,req,response,next)=>{
    response.json({"message":"user not responding...refresh your page"})
})

module.exports=userRoute