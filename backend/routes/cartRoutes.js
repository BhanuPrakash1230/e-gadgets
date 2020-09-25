const express=require('express');
const mongoClient=require('mongodb').MongoClient;
const checkAuthorization=require('../middlewares/checkAuthorization')
const bodyParser=require('body-parser')
const cartRoute=express.Router()
cartRoute.use(bodyParser.json())


var url="mongodb+srv://XXXXXXXX:XXXXXXXX@cluster0-hz86r.mongodb.net/test?retryWrites=true&w=majority";
var dbc;
var collectionObject;
mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log(err)
    }
    else{
        dbc=client.db('eCommerceDatabase')
        cartCollectionObject=dbc.collection('cartCollection');
        purchaseCollectionObject=dbc.collection('purchaseCollection')
        console.log('Connected to cart DataBase...')
    }
})

cartRoute.post('/addToCart',checkAuthorization,(request,response,next)=>{
    cartCollectionObject.insertOne({
        image:request.body.image,
        userName:request.body.userName,
        name:request.body.name,
        price:request.body.price,
        productID:request.body.productID,
        cartProductID:request.body.cartProductID
    },(err,success)=>{
        if(err){
            return next(err)
        }
        else{
        response.json({"message":"item added to Cart..."})
        }
    })
})

cartRoute.get('/getFromCart',(request,response,next)=>{
    cartCollectionObject.find().toArray((err,data)=>{
        if(err){
            return next(err)
        }
        else{
            response.json({"cartData":data})
        }
    })
})

cartRoute.delete('/removeFromCart/:cartProductID',(request,response,next)=>{
    cartCollectionObject.deleteOne({
        cartProductID:request.params.cartProductID
    },(err,success)=>{
        if(err){
            return next(err)
        }
        else{
            cartCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err)
                }
                else{
                    response.json({"cartData":data})
                }
            })
        }
    })
})

cartRoute.post('/addToPurchase',(request,response,next)=>{
    purchaseCollectionObject.insertMany(request.body,(err,success)=>{
        if(err){
            return next(err)
        }
        else{
            response.json({"message":"purchased"})
        }
    })
})

cartRoute.delete('/removeAllFromCart/:userName',(request,response,next)=>{
    cartCollectionObject.deleteMany({userName:request.params.userName},(err,success)=>{
        if(err){
            return next(err)
        }
        else{
            cartCollectionObject.find().toArray((err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    response.json({"cartData":data})
                }
            })
        }
    })
})

cartRoute.get('/getFromPurchase',(request,response,next)=>{
    purchaseCollectionObject.find().toArray((err,data)=>{
        if(err){
            return next(err)
        }
        else{
            response.json({"purchaseData":data})
        }
    })
})

cartRoute.use((err,request,response,next)=>{
    response.json({"message":"error in accessing cart"})
})

module.exports=cartRoute;