const express= require('express');
const router = express.Router();

const colombia = require('./../resources/files/colombia');
const Albergue = require('./../resources/files/albergue'); 
const Mascot = require('../controllers/mascottController')
const Persona = require('../controllers/personController')
const solicitudes = require('../controllers/adoptControllers')


let students = []

let personas=[]

//Mascotas
//post: /mascotas
router.post('/mascots', Mascot.add);
// get: /mascotas
router.get('/mascots', Mascot.list);
//delete /mascots
router.delete('/mascots/:id', Mascot.delete);
//get mascotas por id
router.get('/mascots/:id', Mascot.show);
router.put('/mascots/:id',Mascot.update);




//Personas
//post:/personas
router.post('/personas', Persona.add);
// get: /personas
router.get('/personas', Persona.list);
//get: /personas/usuario
router.get('/personas/:usuario',Persona.show);

//Adopciones
//post: / adopciones
router.post('/procesos', solicitudes.add);
//get: /adopciones
router.get('/procesos', solicitudes.list);






router.get('/Adopciones',(req,res)=>{
    res.render("Adopciones",{personas:personas,title:"Página de Adopcion"});
});

router.get('/AdopcionCrud',(req,res)=>{
    res.render("AdopcionCrud",{personas:personas,title:"Página de Adopcion"});
});

router.get('/MascotaCrud',(req,res)=>{
    res.render("MascotaCrud",{personas:personas,title:"Página de Adopcion"});
});

router.get('/MascotaEdit',(req,res)=>{
    res.render("MascotaEdit",{personas:personas,title:"Página de Adopcion"});
});

router.get('/arregloEstu',(req,res)=>{
    res.render("arregloEstu",{personas:personas,title:"Página de Adopcion"});
});

router.get('/',(req,res)=>{
    res.render("indexR",{personas:personas,title:"Página de Inicio"});
});
router.get('/index',(req,res)=>{
    res.render("index",{personas:personas,title:"Página de Inicio usuarios"});
});
router.get('/indexAdmin',(req,res)=>{
    res.render("indexAdmin",{personas:personas,title:"Página de Inicio Admin"});
});

router.get('/formularioAdop',(req, res)=>{
    res.render('formularioAdop',{title:"Insertar Estudiante",
        mascotas:Albergue.mascotas,
        towns:Albergue.towns});
});

router.get('/Donaciones',(req,res)=>{
    res.render("Donaciones",{personas:personas,title:"Página de Donacion"});
});

router.get('/Registro',(req,res)=>{
    res.render('Registro',{title:"Registro"});
});
router.get('/ingresar',(req,res)=>{
    res.render('ingresar',{title:"Ingresar"});
});

router.post('/formularioAdop',(req,res)=>{
    const{code, name, lastName, gender, mascot, town, email, phone } = req.body;
    const dptoAux = Albergue.mascotas.find( record => record.code == mascot ).name;
    const townAux = Albergue.towns.find( record => record.code == town ).name;
    const city = townAux.concat( '-', dptoAux );
    const genAux = gender == 'F' ? "Femenino" : "Masculino";
    let newReg = {code, lastName, name, genAux, city, email, phone  };
    personas.push(newReg);
    res.redirect('/Adopciones');
});

router.get('/about',(req,res)=>{
   res.render('about',{title:"Sobre Nosotros"});
});

module.exports = router;
