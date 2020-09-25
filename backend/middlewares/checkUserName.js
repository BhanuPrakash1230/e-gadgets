const express=require('express')
const bodyParser=require('body-parser')
const mongoClient=require('mongodb').MongoClient;

var url="mongodb+srv://eCommerceDatabase:eCommerceDatabase@cluster0-hz86r.mongodb.net/test?retryWrites=true&w=majority";
var dbc;
var collectionObject;
mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{

    if(err){
        console.log(err)
    }
    else{
        dbc=client.db('eCommerceDatabase')
        collectionObject=dbc.collection('userCollection');
        console.log('Connected to checkuserName DataBase...')
    }
})

var checkUserName=function (request,response,next) {
    collectionObject.find({userName:request.body.userName}).toArray((err,data)=>{
                                                        if(err){
                                                            console.log(err)
                                                        }
                                                        if(data.length===0){
                                                            next();
                                                        }
                                                        else{
                                                            response.json({"message":"User Name already exists...choose another one"})
                                                        }
                                                    })
}


module.exports=checkUserName;