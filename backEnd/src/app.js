const express = require('express')
const app = express();
const cors = require('cors')
const mogoose =require('mongoose')
const morgan = require('morgan')


const database = require('./config/db.config');
const mongoose = require('mongoose');
//
mogoose.Promise = global.Promise;
// Rota da api
const index = require('./routes/index')
const  userRoutes = require('./routes/user.router')

// ==>conexão da base de dados:
mongoose.connect(process.env.DB_URL)
            .then(()=>{
                console.log('A Base de dados foi cconectada com sucesso')
            },(erro) => {
                console.log(`Erro ao conectar com a Base de Dados... ${erro}`);
                process.exit()
            });

            

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(morgan('dev'));
app.use(cors());

app.use(index);
app.use('/', userRoutes)


module.exports = app


