import express from "express";
const routing = express.Router()

routing.get("/get", (req, res) => {
    res.json({
        msg: "product get all"
    })
})

routing.post("/cre", (req, res) => {
    res.json({
        msg: "create product"
    })
})


routing.put("/upload",(req,res) => {
    res.json({
        msg: "upload product"
    })
})


routing.delete("/del", (req, res)=>{
    res.json({
        msg: "del product"
    })
})
export default routing
