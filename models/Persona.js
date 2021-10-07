const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const personSchema = new Schema({
    nombre:{
        type:String,
        trim:true,
       
    },
    apellido: {
        type: String,
        trim: true,   
    },
    cedula:{
        type:String,
        trim:true,
        unique: true
    },
    usuario: {
    type: String,
    trim: true,
    unique: true
    },
    contraseña:{
    type: String,
    trim: true,    
    },
    email:{
        type:String,
        trim:true,
        unique: true
    }


});

module.exports = mongoose.model('Persons', personSchema);