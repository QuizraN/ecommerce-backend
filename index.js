const express=require("express")
const app=express()
const cors = require("cors")
const {PrismaClient} =require("@prisma/client")
const my_router=require("./routes/productsRoute")
let port= process.env.PORT || 3002

app.use(cors())

app.use(express.json())


app.use("/api/products",my_router);

app.get("/",(req,res)=>{
    res.send("Welcome to the Home Page!")
})

app.listen(port,()=>{
    console.log("Listening to 3002")
})
