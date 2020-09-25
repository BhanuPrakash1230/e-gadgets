const express=require('express')
const app=express()
const userRoute=require('./routes/userRoutes')
const productsRoute=require('./routes/productsRoutes')
const cartRoute=require('./routes/cartRoutes')
const path=require('path')
const cloudinary=require('cloudinary');
const cloudinaryStorage=require('multer-storage-cloudinary');
const multer=require('multer')

app.use(express.static(path.join(__dirname,'../dist/e-commerce')))

app.use('/user',userRoute)

app.use('/product',productsRoute)

app.use('/cart',cartRoute)
cloudinary.config({
    cloud_name:"uma-chinni",
    api_key:"663997293781923",
    api_secret:"_U_57tdLB9fdsuy3JB9Je6DFE2U"
})

app.listen(process.env.PORT || 8080,()=>{
    console.log('server running on port 8080')
})