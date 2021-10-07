const Mascota = require('../models/Mascota');

//agregar mascota
exports.add = async(req, res) =>{
    const mascot = new Mascota(req.body);
    try {
        await mascot.save();
        res.json({message: ' Nueva mascota agregada'})
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya esxiste una mascota con ese codigo: ${req.body.id}`,

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
        const mascot = await Mascota.find({});
        res.json(mascot);
        } catch (error){
            console.log(error);
            res.send(error);
            next();
        }
    };

    //leer mascota por id
exports.show =async(req,res)=>{
    try {
        const mascot = await Mascota.find({id: new RegExp(req.params.id,'i'),
    });
        if(!mascot){
            res.status(404).json({
                message: 'La mascota no existe'
            });
        }
        res.json(mascot);
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
};


//Actualizar mascota
exports.update = async (req,res,next) =>{
    try {
        const mascot = await Mascota.findOneAndUpdate(
            {id: req.params.id},
            req.body,
            {new: true}
        );
        res.json({
            message:'Mascota actualizado Correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
};


//Eliminar Mascota
exports.delete = async (req,res,next) =>{
    try {
        await Mascota.findOneAndDelete({id:req.params.id});
        res.json({message: 'La mascota ha sido eliminado'});
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
}
