const express=require("express")
const myrouter=express.Router();
const productController = require("../controllers/productsController")


//Get all products
myrouter.get("/",productController.getAllProducts)
//Get product
myrouter.get("/:id",productController.getProduct)
//Create a Product
myrouter.post("/create",productController.createProduct)


//Get all reviews
myrouter.get("/:id/reviews",productController.getAllReviews)
//Create a Review for a product
myrouter.post("/:id/reviews/create",productController.createProductReview)


module.exports=myrouter;