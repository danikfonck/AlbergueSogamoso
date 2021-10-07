const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adopSchema = new Schema({
    code:{
        type:String,
        trim:true,
        unique: true,

    },
    created: {
        type: Date,
        default: Date.now,
    },
    person:{
        type: Schema.ObjectId,
        ref: 'Persona',
    },
    mascott:{
        type:Schema.ObjectId,
        ref: 'Mascota'
    }
});

module.exports = mongoose.model('Adoptions',adopSchema);