const express=require('express');
const mongoClient=require('mongodb').MongoClient;
const bodyParser=require('body-parser')
const productsRoute=express.Router()


//DataBase Connection
var url="mongodb+srv://XXXXXXXX:XXXXXXXX@cluster0-hz86r.mongodb.net/test?retryWrites=true&w=majority";
var dbc;
var mobilesCollectionObject;
var laptopsCollectionObject;
mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log(err)
    }
    else{
        dbc=client.db('XXXXXXXX')
        mobilesCollectionObject=dbc.collection('mobilesCollection');
        laptopsCollectionObject=dbc.collection('laptopsCollection');
        watchesCollectionObject=dbc.collection('watchesCollection');
        headsetCollectionObject=dbc.collection('headsetCollection');
        console.log('Connected to productRoutes DataBase...')
    }
})
productsRoute.use(bodyParser.json())


//managing Mobiles
productsRoute.post('/addMobiles',(request,response,next)=>{
    mobilesCollectionObject.insertOne(request.body,(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            mobilesCollectionObject.find().toArray((err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    response.json({"data":data})
                }
            })
        }
    })
})

productsRoute.get('/getMobiles',(request,response,next)=>{
    mobilesCollectionObject.find().toArray((err,data)=>{
        if(err){
            return next(err);
        }
        else{
            response.json({"data":data})
        }
    })
})
productsRoute.delete('/deleteMobile/:productID',(request,response,next)=>{
  
    mobilesCollectionObject.deleteOne({productID:request.params.productID},(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            mobilesCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            }) 
        }
    })
})

productsRoute.put('/editMobile',(request,response,next)=>{

    mobilesCollectionObject.updateOne({productID:request.body.productID},{$set:{
        name:request.body.name,
        price:request.body.price,
        image:request.body.image,
        RAM:request.body.RAM,
        ROM:request.body.ROM,
        Camera:request.body.Camera,
        inch:request.body.inch,
        battery:request.body.battery,
        processor:request.body.processor,
        box:request.body.box
    }}),(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            mobilesCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            })
        }
    }
})

//managing Laptops
productsRoute.post('/addLaptops',(request,response,next)=>{
    laptopsCollectionObject.insertOne(request.body,(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            laptopsCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    console.log(data)
                    response.json({"data":data})
                }
            })
        }
    })
})
productsRoute.get('/getLaptops',(request,response,next)=>{
    laptopsCollectionObject.find().toArray((err,data)=>{
        if(err){
            return next(err);
        }
        else{
            response.json({"data":data})
        }
    })
})


productsRoute.delete('/deleteLaptop/:productID',(request,response,next)=>{
  
    laptopsCollectionObject.deleteOne({productID:request.params.productID},(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            laptopsCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            }) 
        }
    })
})

productsRoute.put('/editLaptop',(request,response,next)=>{

    laptopsCollectionObject.updateOne({productID:request.body.productID},{$set:{
        name:request.body.name,
        price:request.body.price,
        image:request.body.image,
        RAM:request.body.RAM,
        HardDisk:request.body.HardDisk,
        processor:request.body.processor,
        OS:request.body.OS,
        screenSize:request.body.screenSize,
        charger:request.body.charger,
        graphicCard:request.body.graphicCard,
        box:request.body.box
    }}),(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            laptopsCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            })
        }
    }
})

//managing Smart Watches
productsRoute.post('/addWatches',(request,response,next)=>{
    watchesCollectionObject.insertOne(request.body,(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            watchesCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            })
        }
    })
})

productsRoute.get('/getWatches',(request,response,next)=>{
    watchesCollectionObject.find().toArray((err,data)=>{
        if(err){
            return next(err);
        }
        else{
            response.json({"data":data})
        }
    })
})


productsRoute.delete('/deleteWatch/:productID',(request,response,next)=>{
  
    watchesCollectionObject.deleteOne({productID:request.params.productID},(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            watchesCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            }) 
        }
    })
})

productsRoute.put('/editWatch',(request,response,next)=>{

    watchesCollectionObject.updateOne({productID:request.body.productID},{$set:{
        name:request.body.name,
        price:request.body.price,
        image:request.body.image,
        suitsFor:request.body.suitsFor,
        clockType:request.body.clockType,
        waterResistant:request.body.waterResistant,
        display:request.body.display,
        battery:request.body.battery,
        touch:request.body.touch,
        functions:request.body.functions,
        box:request.body.box
    }}),(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            watchesCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            })
        }
    }
})

//managing Headset
productsRoute.post('/addHeadset',(request,response,next)=>{
    headsetCollectionObject.insertOne(request.body,(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            headsetCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            })
        }
    })
})

productsRoute.get('/getHeadset',(request,response,next)=>{
    headsetCollectionObject.find().toArray((err,data)=>{
        if(err){
            return next(err);
        }
        else{
            response.json({"data":data})
        }
    })
})
productsRoute.delete('/deleteHeadset/:productID',(request,response,next)=>{
  
    headsetCollectionObject.deleteOne({productID:request.params.productID},(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            headsetCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            }) 
        }
    })
})

productsRoute.put('/editHeadset',(request,response,next)=>{

    headsetCollectionObject.updateOne({productID:request.body.productID},{$set:{
        name:request.body.name,
        price:request.body.price,
        image:request.body.image,
        headsetType:request.body.headsetType,
        connectivity:request.body.connectivity,
        bluetooth:request.body.bluetooth,
        port:request.body.port,
        microphone:request.body.microphone,
        features:request.body.features,
        box:request.body.box
    }}),(err,success)=>{
        if(err){
            return next(err);
        }
        else{
            headsetCollectionObject.find().toArray((err,data)=>{
                if(err){
                    return next(err);
                }
                else{
                    response.json({"data":data})
                }
            })
        }
    }
})
//error Handling
productsRoute.use((err,request,response,next)=>{
    response.json({"message":"error in accessing products"})
})
module.exports=productsRoute