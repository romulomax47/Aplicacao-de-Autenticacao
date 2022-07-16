

const express = require('express')

const router = express.Router();

router.get('/', (req,res) =>{
    res.status(200).send({
        sucesse:true,
        message:'Seja bem-vindo a API NODE.JS + mongoDb'
    })
})

module.exports = router;