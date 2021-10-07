const Adopcion = require('../models/Adopcion');



//agregar adopcion
exports.add = async (req,res,next) =>{
    try {
    const adopcion = new Adopcion(req.body);
    await adopcion.save();
    res.json(adopcion);
        
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({
                message: `Ya existe una adopión con el code: ${req.body.code} `,
            });  
        }else{
            res.status(400).json({
                message: 'Error al procesar la petición'
            });
        }
        
    }
};




  
//mostrar adopciones
exports.list = async (req,res,next) =>{
    try{
        const adopcion = await Adopcion.find({});
        //.populate('person')
        //.populate('mascott');
        
        res.json(adopcion);
            
    }catch(error){
        res.status(400).json({
            message: 'Error al procesar la petición ññ'
        });

    }
};