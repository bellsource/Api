const express = require ("express");
const Sequelize  = require("sequelize");
const bodyParser = require ("body-parser");


// conexion a Base de Datos
const sequelize = new Sequelize("mysql://root@localhost:3306/login")//inicializamos-conexión

// Entrada a nuestra app.Seteo el server aca
const http = require('http');
const app = express();


// capturo el body
app.use(bodyParser.json());

app.use("/user",usuarios);

// importo rutas
const usuarios = require ("./modules/usuarios");//importamos el modulo usuarios
//const usuarios = require("./routes/usuarios")

// ruta middelware - ruta "padre"
//app.use('/api/user', usuarios);

/**Para probar si funciona */
//  app.get('/', (req, res) => {
//      res.json({
//          estado: true,
//          mensaje: 'funciona!'
//      })
//  });

//  sequelize.query ('SELECT * FROM usuarios WHERE username = :username',
//  {
//  replacements: {
//     username: 'belu'
//  },
//   type: sequelize.QueryTypes.SELECT 
//  } 
//  ).then(projects=> { 
//  console.log(projects)
//  }) 
//app.use("/user",usuarios);

//consultar datos de la bd
app.get("/usuarios" , (req,res) => {
    sequelize.query("SELECT * from usuarios",
    {type: sequelize.QueryTypes.SELECT}
    ).then(function(resultados){
        res.json(resultados);
    });

});


//Middelware - se usa para todas las rutas





//consultar datos de la bd
app.get("/usuarios" , (req,res) => {
    sequelize.query("SELECT * from usuarios",
    {type: sequelize.QueryTypes.SELECT}
    ).then(function(resultados){
        res.json(resultados);
    });

});
//con params se accede al id
app.get("/usuarios/:id" , (req,res) => {
    const userID = req.params.id;
    sequelize.query("SELECT * from usuarios where id = :id",
    {replacements:{id:userID}, type: sequelize.QueryTypes.SELECT}
    ).then(function(resultados){
        res.json(resultados);
    });
});

//inicio servidor
app.listen(3000,() =>{
    console.log("servidor iniciado...");
})

