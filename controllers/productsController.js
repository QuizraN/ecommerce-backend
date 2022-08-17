const express=require("express")
const myrouter=express.Router();
const {PrismaClient} =require("@prisma/client")
const {product,review:reviewtable} = new PrismaClient;


//Get all products
const getAllProducts=async (req,res,next)=>
{
    try{
        const products=await product.findMany()
        res.json(products)
    }
    catch(err) {
        console.error(`Error while getting Products`, err.message);
        next(err);
    }  
}


//Get product
const getProduct=async(req,res,next)=>
{
    try{
        console.log(req.params.id)
        var pid=parseInt(req.params.id)
        const products=await product.findUnique({
            where:{
               id:pid
               //Name:'Dell Laptop | i7 | 16inch | 8GB RAM | 256 GB Storage | 500MG GRAPHIC card'
            }
        })

        console.log(products)
        res.json(products)
    }
    catch(err) {
        console.error(`Error while getting Products`, err.message);
        next(err);
    }  
}
myrouter.get("/:id",async (req,res)=>{
    
})

//Get all reviews
const getAllReviews=async(req,res,next)=>
{
    try{
        console.log(req.params.id)
        var pid=parseInt(req.params.id)
        const allReviews=await reviewtable.findMany({
            where:{
               product_id:pid
            }
        })
        res.json(allReviews)
    }
    catch(err) {
        console.error(`Error while getting Products`, err.message);
        next(err);
    }  
}

//Create a Product
const createProduct=async(req,res,next)=>
{
    try{
        const {name,description,category,quantity,price,image,variants}=req.body;
        const new_product=await product.create({
        data:{
            name,
            description,
            category,
            quantity,
            price,
            image,
            variants
        }
        })
        res.json(new_product)
    }
    catch(err) {
        console.error(`Error while getting Products`, err.message);
        next(err);
    }  
}

//Create a Review for a product
const createProductReview=async(req,res,next)=>
{
    try{
        console.log("Test",req.body)
        const {name,review,rating,product_id}=req.body;
    
        console.log("Hello")
        const new_review = await reviewtable.create({
            data:{
                name,
                review,
                rating,
                product_id
            }
        })
        console.log("New Request created for:"+new_review)
        res.json(new_review)
    }
    catch(err) {
        console.error(`Error while getting Products`, err.message);
        next(err);
    }  
}
module.exports={getAllProducts,getProduct,createProduct,getAllReviews,createProductReview}