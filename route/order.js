import express from "express";

const router = express.Router()

router.get("/", (req, res) =>{
    res.json({
        msg : "order get all"
    })
})

router.post("/create", (req, res) =>{
    const newOroduct ={
        name : req.body.orederName,
        price : req.body.ordered,
        desc : req.body.orderDesc
    }

    res.json({
        msg : "created a order",
        order : newOroduct
    })
})

router.put("/update", (req, res) =>{
    res.json({
        msg : "updated a order"
    })
})


router.delete("/delete", (req, res) =>{
    res.json({
        msg : "deleted a order"
    })
})

export default router