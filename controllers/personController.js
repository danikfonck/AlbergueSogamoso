const Persona = require('../models/Persona');


//agregar persona
exports.add = async(req, res) =>{
    const persona = new Persona(req.body);
    try {
        await persona.save();
        res.json({message: ' Nueva persona agregada'})
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya esxiste una persona con ese codigo: ${req.body.id}`,

            });
        }else{
            res.status(400).json({
                message:'Error al procesar la peticion'
            });
        }
            
        }
        
    };

    //primera acción: index

    exports.list = async(req,res)=>{
        try{
        const persona = await Persona.find({});
        res.json(persona);
        } catch (error){
            console.log(error);
            res.send(error);
            next();
        }
    };

    //leer persona por id
/*exports.show =async(req,res)=>{
    try {
        const persona = await Persona.find({cedula: new RegExp(req.params.cedula,'i'),
    });
        if(!persona){
            res.status(404).json({
                message: 'La mascota no existe'
            });
        }
        res.json(persona);
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
};*/

    //leer persona por usuario y contraseña
    exports.show =async(req,res)=>{
        try {
            const usuario = await Persona.find({usuario: new RegExp(req.params.usuario,'i'),
        });
            
            if(!usuario){
                res.status(404).json({
                    message: 'La persona no ha sido registrada'
                });
            }
            res.json(usuario);
            
        } catch (error) {
            res.status(400).json({
                message:'Error al procesar la petición'
            });
        }
    };


//Actualizar persona
exports.update = async (req,res,next) =>{
    try {
        const persona = await Persona.findOneAndUpdate(
            {cedula: req.params.cedula},
            req.body,
            {new: true}
        );
        res.json({
            message:'Persona actualizado Correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
};


//Eliminar persona
exports.delete = async (req,res,next) =>{
    try {
        await Persona.findOneAndDelete({cedula:req.params.cedula});
        res.json({message: 'La persona ha sido eliminado'});
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
}


//Agregar persona