const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mascotSchema = new Schema({
    id:{
        type:String,
        trim:true,
        unique:true
    },
    tipo:{
        type: String,
        trim: true, 

    },
    nombre: {
        type: String,
        trim: true,   
    },
    edad:{
        type:String,
        trim:true

    },
    genero: {
        type:String,
        trim:true

    },
    descripcion: {
    type: String,
    trim: true,
    }



});

module.exports = mongoose.model('Mascots', mascotSchema);