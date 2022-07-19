

const express = require('express')

const router = express.Router();

router.get('/api/v1', (req,res) =>{
    res.status(200).send({
        sucesse:true,
        message:'Seja bem-vindo a API NODE.JS + mongoDb'
    })
})

module.exports = router;