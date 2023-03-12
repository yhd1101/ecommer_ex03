import express from "express"
import product from "./route/product.js";
import morgan from "morgan"


const app = express()

app.use("/hello", (req ,res) => {
    res.json({
        data : "hello world"
    })
})

app.use("/product", product)

app.use(morgan("common"))


const port = 7000

app.listen(port, console.log("Server started"))