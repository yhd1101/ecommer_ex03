import express from "express"
import product from "./route/product.js";
import order from "./route/order.js"
import user from "./route/user"
import morgan from "morgan"
import bodyParser from "body-parser";
import dotenv from "dotenv"
import mongoose from "mongoose";
const app = express()
dotenv.config()


//데이터베이스 연결정보

const dbAddress = process.env.MONGODB_ADDRESS

mongoose
    .connect(dbAddress)
    .then(_ => console.log("database connected"))
    .catch(err => console.log(err.message))

// app.use("/hello", (req ,res) => {
//     res.json({
//         data : "hello world"
//     })
// })
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))


// routing
app.use("/product", product)
app.use("/order", order)
app.use("/user", user)




const port = process.env.PORT || 9050

app.listen(port, console.log("Server started"))