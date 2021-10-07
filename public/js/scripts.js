var datos;
function mostrarMascotas(){
let image;
    fetch('http://localhost:3000/mascots').
    then(res => res.json())
    .then(res =>{
        res.forEach(element => {
            var row = document.createElement('tr');
            row.setAttribute("class", "table-warning")
            var col = document.createElement('td');
            var button = document.createElement('a')
            col.appendChild(document.createTextNode(element.tipo));
            row.appendChild(col)
            document.getElementById('tbody').appendChild(row);
    
    
            col = document.createElement('td');
            col.appendChild(document.createTextNode(element.nombre));
            row.appendChild(col);
            document.getElementById('tbody').appendChild(row);
    
            col = document.createElement('td');
            col.appendChild(document.createTextNode(element.edad));
            row.appendChild(col);
            document.getElementById('tbody').appendChild(row);
    
            col = document.createElement('td');
            col.appendChild(document.createTextNode(element.genero));
            row.appendChild(col);
            document.getElementById('tbody').appendChild(row);
    
            col = document.createElement('td');
            col.appendChild(document.createTextNode(element.descripcion));
            row.appendChild(col);
            document.getElementById('tbody').appendChild(row);

    

            button.appendChild(document.createTextNode('Adoptar'))
            button.setAttribute("style", "position: absolute")

            row.appendChild(button);
            document.getElementById('tbody').appendChild(row);
            button.onclick=function(res,req){
                //event.preventDefault();

                //console.log(datos)
                this.href="/formularioAdop"
                console.log(element.nombre)
                console.log(element)
            }

        });
    })
    .catch (err =>console.error());
    }



    ////////////////////////////////////////////Peronas/////////////////////
    function cargarEventos(){
        document.getElementById("nuevaPersona").addEventListener("submit",Registro,false);
    }
    
    
    function Registro(){
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var cedula = document.getElementById("cedula").value;
        var usuario = document.getElementById("usuario").value;
        var contraseña = document.getElementById("contraseña").value;
        var email = document.getElementById("email").value;
        
        var nuevaPersona={nombre:nombre,apellido:apellido,cedula:cedula,
            usuario:usuario,contraseña:contraseña,
            email:email};
        fetch('http://localhost:3000/personas',{
            method:"POST",
            body: JSON.stringify(nuevaPersona),
            headers:{"Content-type": "application/json; charset=UTF-8"} 
        }).then(res=>res.json())
        .then(data=>console.log(data))

    }

    ////////////////////////Ingreso///////////////////
    function cargarIngresar(){
        document.getElementById("nuevoIngreso").addEventListener("submit",login,false);
    }
    function login(){
        event.preventDefault();
        var alerta = document.createElement('div');


        var user,pass;
        user = document.getElementById('usuario').value;
        pass =document.getElementById('contraseña').value;
        fetch('http://localhost:3000/personas/'+ user , {
        }).then(res => res.json())
        .then(data => {
                var button = document.createElement('a')
                 button.setAttribute("id", "ingreso")
            if (data.length === 0) {
                console.log('Usuario no registrado');
                alerta = document.createElement('div');
                alerta.setAttribute("class", "alert alert-primary")
                alerta.setAttribute("id", "alerta")
                alerta.appendChild(document.createTextNode("Usuario no registrado"))
                document.getElementById('col').appendChild(alerta);
                
            }else{

                button.appendChild(document.createTextNode("Ingresar"))
                document.getElementById('col').appendChild(button);
                document.getElementById("boton").style.display='none';
                button.onclick=function(res,req){
                    this.href="/index"
                    console.log(element.nombre)
                    console.log(element)
                }
                console.log('El dato existe')
                console.log(data)
                if (user === 'Admin') {
                    button.onclick=function(res,req){
                        this.href="/indexAdmin"
                        console.log(element.nombre)
                        console.log(element)
                    }
                    console.log('Es el administrador')
                }
            }
                datos = JSON.stringify(data)
        })
    }

///////////////////Crud Mascotas////////////////
function cargarMascotas(){
    document.getElementById("nuevaMascota").addEventListener("submit",agregarMascota,false);
}


function agregarMascota(){
    event.preventDefault();

    var id = document.getElementById("id").value;
    var tipo = document.getElementById("tipo").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var descripcion = document.getElementById("descripcion").value;
    
    var nuevaMascota={id:id,tipo:tipo,nombre:nombre,
        edad:edad,genero:genero,
        descripcion:descripcion};
    fetch('http://localhost:3000/mascots',{
        method:"POST",
        body: JSON.stringify(nuevaMascota),
        headers:{"Content-type": "application/json; charset=UTF-8"} 
    }).then(res=>res.json())
    .then(data=>console.log(data))
}

function listaMascotas(){
    let image;
        fetch('http://localhost:3000/mascots').
        then(res => res.json())
        .then(res =>{
            res.forEach(element => {
                var row = document.createElement('tr');
                var eliminar =document.createElement('button');
                var editar = document.createElement('button');
                row.setAttribute("class", "table table-bordered border-dark")
                var col = document.createElement('td');
    
                col.appendChild(document.createTextNode(element.id));
                row.appendChild(col)
                document.getElementById('tbody').appendChild(row);
                
                col = document.createElement('td');
                col.appendChild(document.createTextNode(element.tipo));
                row.appendChild(col);
                document.getElementById('tbody').appendChild(row);
        
                col = document.createElement('td');
                col.appendChild(document.createTextNode(element.nombre));
                row.appendChild(col);
                document.getElementById('tbody').appendChild(row);
        
                col = document.createElement('td');
                col.appendChild(document.createTextNode(element.edad));
                row.appendChild(col);
                document.getElementById('tbody').appendChild(row);
        
                col = document.createElement('td');
                col.appendChild(document.createTextNode(element.genero));
                row.appendChild(col);
                document.getElementById('tbody').appendChild(row);

                col = document.createElement('td');
                col.appendChild(document.createTextNode(element.descripcion));
                row.appendChild(col);
                document.getElementById('tbody').appendChild(row);
    
               /* eliminar.appendChild(document.createTextNode('Eliminar'));
                row.appendChild(eliminar);
                eliminar.setAttribute("class", "btn btn-danger")
                eliminar.setAttribute("id", "eliminar")
                document.getElementById('tbody').appendChild(row);

                eliminar.click=eliminarMascota;*/
            });
        })
        .catch (err =>console.error());
        }
        
        function cargarEliminados(){
            document.getElementById("eliminado").addEventListener("submit",eliminarMascota,false);
        }


function eliminarMascota(){
    event.preventDefault();
    var id =document.getElementById("idEliminado").value;
    console.log("id es este "+ id)

    fetch('http://localhost:3000/mascots/' + id, {
        method:'DELETE',
        //body: JSON.stringify(nueviId),
        headers:{"Content-type": "application/json; charset=UTF-8"} 

    })
    .then(res => res.json())
    .then(data =>{
        console.log("  este es mmm"+ id)
        console.log(data)
    });
    

}

function cargarEditado(){
    document.getElementById("editarMascota").addEventListener("submit",editarMascota,false);
}

function editarMascota(){
    event.preventDefault();
    var id = document.getElementById("id").value;
    var tipo = document.getElementById("tipo").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var descripcion = document.getElementById("descripcion").value;
    
    /*var nuevaMascota={id:id,tipo:tipo,nombre:nombre,
        edad:edad,genero:genero,
        descripcion:descripcion};*/
    console.log("id es este "+ id)

    fetch('http://localhost:3000/mascots/' + id)
    .then(res => res.json())
    .then(res => {
        res.forEach(element => {
            document.getElementById("tipo").value=element.tipo;
            document.getElementById("nombre").value=element.nombre;
            document.getElementById("edad").value=element.edad;
            document.getElementById("genero").value=element.genero;
            document.getElementById("descripcion").value=element.descripcion;
        });
    });
    document.getElementById("agregar").style.display='none';
}

function nuevaMascota(){

    var id = document.getElementById("id").value;
    var tipo = document.getElementById("tipo").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var descripcion = document.getElementById("descripcion").value;
    var nuevaMascota={id:id,tipo:tipo,nombre:nombre,
        edad:edad,genero:genero,
        descripcion:descripcion};
    fetch('http://localhost:3000/mascots/' + id, {
        method:'PUT',
        body: JSON.stringify(nuevaMascota),
        headers:{"Content-type": "application/json; charset=UTF-8"}
    }).then(res=>res.json())
      .then(data=>console.log(data));
}






    /////////////////////Adopciones/////////////////////

    
    function listaAdopciones(){
        let image;
            fetch('http://localhost:3000/procesos').
            then(res => res.json())
            .then(res =>{
                res.forEach(element => {
                    var row = document.createElement('tr');
                    var eliminar =document.createElement('button');
                    var editar = document.createElement('button');
                    row.setAttribute("class", "table table-bordered border-dark")
                    var col = document.createElement('td');
        
                    col.appendChild(document.createTextNode(element.code));
                    row.appendChild(col)
                    document.getElementById('tbody').appendChild(row);
                    
                    col = document.createElement('td');
                    col.appendChild(document.createTextNode(element.created));
                    row.appendChild(col);
                    document.getElementById('tbody').appendChild(row);
            
                    col = document.createElement('td');
                    col.appendChild(document.createTextNode(element.person.nombre));
                    row.appendChild(col);
                    document.getElementById('tbody').appendChild(row);
            
                    col = document.createElement('td');
                    col.appendChild(document.createTextNode(element.mascott));
                    row.appendChild(col);
                    document.getElementById('tbody').appendChild(row);
            
                    
                   /* eliminar.appendChild(document.createTextNode('Eliminar'));
                    row.appendChild(eliminar);
                    eliminar.setAttribute("class", "btn btn-danger")
                    eliminar.setAttribute("id", "eliminar")
                    document.getElementById('tbody').appendChild(row);
    
                    eliminar.click=eliminarMascota;*/
                });
            })
            .catch (err =>console.error());
            }

/////////////////Donaciones//////////


function cargarDonacion(){
    document.getElementById("donacion").addEventListener("button",mostrarDonacion,false);
}
function mostrarDonacion(){
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var documento = document.getElementById("documento").value;
    var codigoP = document.getElementById("codigo").value;
    var localidad = document.getElementById("localidad").value;
    var direccion = document.getElementById("direccion").value;
    var ciudad = document.getElementById("ciudad").value;
    var monto = document.getElementById("monto").value;

    var nuevaDonacion={nombre:nombre,apellido:apellido,telefono:telefono,
        documento:documento,codigoP:codigoP,
        localidad:localidad, direccion:direccion,ciudad:ciudad
        ,monto:monto
    };

    alert(nuevaDonacion)

    var row = document.createElement('tr');
   // row.setAttribute("class", "table table-bordered border-dark")
    var col = document.createElement('td');
        
    col.appendChild(document.createTextNode(nuevaDonacion.nombre));
    row.appendChild(col)
    document.getElementById('tbody').appendChild(row);


    col = document.createElement('td');
    col.appendChild(document.createTextNode(nuevaDonacion.apellido));
    row.appendChild(col);
    document.getElementById('tbody').appendChild(row);

    col = document.createElement('td');
    col.appendChild(document.createTextNode(nuevaDonacion.telefono));
    row.appendChild(col);
    document.getElementById('tbody').appendChild(row);

    col = document.createElement('td');
    col.appendChild(document.createTextNode(nuevaDonacion.documento));
    row.appendChild(col);
    document.getElementById('tbody').appendChild(row);

    col = document.createElement('td');
    col.appendChild(document.createTextNode(nuevaDonacion.codigoP));
    row.appendChild(col);
    document.getElementById('tbody').appendChild(row);

    col = document.createElement('td');
    col.appendChild(document.createTextNode(nuevaDonacion.localidad));
    row.appendChild(col);
    document.getElementById('tbody').appendChild(row);

    col = document.createElement('td');
    col.appendChild(document.createTextNode(nuevaDonacion.direccion));
    row.appendChild(col);
    document.getElementById('tbody').appendChild(row);

    col = document.createElement('td');
    col.appendChild(document.createTextNode(nuevaDonacion.ciudad));
    row.appendChild(col);
    document.getElementById('tbody').appendChild(row);

    col = document.createElement('td');
    col.appendChild(document.createTextNode(nuevaDonacion.monto));
    row.appendChild(col);
    document.getElementById('tbody').appendChild(row);




}
    