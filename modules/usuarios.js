const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.json("obtengo usuarios");
})

router.get("/listado", (req,res)=>{
    res.json("listado de usuarios");
})

module.exports =router;