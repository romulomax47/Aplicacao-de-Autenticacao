const express = require('express')
const bodyParce = require('body-parser')
const cors = require('cors')
const mogoose =require('mongoose')
const morgan = require('morgan')

const app = express();

//Rotas

const index = require('./routes/index')
//TODO

app.use(bodyParce.urlencoded({extended: true}))
app.use(bodyParce.json());
app.use(bodyParce.json({type: 'application/vnd.api+json'}));
app.use(morgan('dev'));
app.use(cors());

app.use(index);


module.exports = app


