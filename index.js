'use strict';

//import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routeIndex = require('./routes/index');

//Initializations
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/albergue_bd',
{
    useNewUrlParser:true,
}
);

app.use(express.static(path.join(__dirname,'public')));
//HAbilitar boduparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Settings
app.set('port',process.env.PORT || 3000 );
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/',routeIndex);

//start server
app.listen(app.get('port'),()=>{
    console.log(`Server Listen to port ${app.get('port')}`);
});
