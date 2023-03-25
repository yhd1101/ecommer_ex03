import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type: Number,
        default : 0
    },
    desc : {
        type : String
    },
    category : {
        type : String
    }
})

const productModel = mongoose.model("product", productSchema) //mongodb에 product라는 폴더가 생기고 , productSchema안에 들어갈 내용을 정리하겠다 이런뜻

export default productModel