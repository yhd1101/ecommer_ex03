import express from "express";
import orderModel from "../models/order.js";

const router = express.Router()


//order 전체를 불러오는 api
router.get("/", (req, res) =>{
    orderModel
        .find()
        .populate("product")
        .then(orders =>{
            res.json({
                msg : "get all orders",
                count : orders.length,
                orders : orders
            })
        })
        .catch(err =>{
            res.json({
                msg : err.message
            })
        })
})

//특정 order를 불러오는 api
router.get("/:orderid", (req, res) =>{
    orderModel
        .findById(req.params.orderid)
        .populate("product")
        .then(order =>{
            if(!order){
                return res.json({
                    msg : "No data"
                })
            }
            res.json({
                msg : "Succeffull get order",
                order : order
            })
        })
        .catch(err =>{
            res.json({
                msg : err.message
            })
        })
})

router.post("/create", (req, res) =>{

    const newOrder = new orderModel({
        product : req.body.product,
        //qty : req.body.qty,
        memo : req.body.memo
    })
    newOrder
        .save()
        .then(result => {
            res.json({
                msg : "created order",
                user :{
                    product : result.product,
                    qty : result.qty,
                    memo : result.memo,
                    id : result._id
                }
            })
        })
        .catch(err =>{
            res.json({
                msg : err.message
            })
        })
})


//수정하는 order api
router.put("/orderid", (req, res) =>{
    const orderid = req.params.orderid

    const updateOps = {}

    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    orderModel
        .findByIdAndUpdate()
        .then(_ =>{
            res.json({
                msg : `updated order by ${orderid}`
            })
        })
        .catch(err =>{
            res.json({
                msg : err.message
            })
        })
})

//order 전체를 삭제하는 api
router.delete("/", (req, res) =>{
    orderModel
        .deleteMany()
        .then(_=>{
            res.json({
                msg : "deleted all order"
            })
        })
        .catch(err =>{
            msg : err.message
        })
})
//특정 order를 삭제하는 api
router.delete("/:orderid", (req, res) => {
   orderModel
       .findByIdAndDelete(req.params.orderid)
       .then(_ =>{
           res.json({
               msg : "deleted order"
           })
       })
       .catch(err =>{
           res.json({
               msg : err.message
           })
       })
})

export default router