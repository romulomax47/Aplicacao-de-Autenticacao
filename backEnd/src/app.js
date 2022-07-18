const express = require('express')
const cors = require('cors')
const mogoose =require('mongoose')
const morgan = require('morgan')

const app = express();
const index = require('./routes/index')

const database = require('./config/db.config');
const mongoose = require('mongoose');
//
mogoose.Promise = global.Promise;

// ==>conexão da base de dados
mongoose.connect(database.local.localDatabaseURL, {userNewUrlParser : true, userUnifiedTopology: true, userCreateIndexx: true })
            .then(()=>{console.log('A Base de dados foi cconectada com sucesso')})
            .catch((erro) => {console.log(`Erro ao conectar com a Base de Dados`)})

            

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(morgan('dev'));
app.use(cors());

app.use(index);


module.exports = app


