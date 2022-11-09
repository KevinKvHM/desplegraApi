const express = require('express');
const app = express();
const runSeed = require('../seeds')
const conect = require('./models/index'); 
const { validationResult } = require('express-validator');
const cors = require('cors');
// Log requests to the console.
const PORT = parseInt(process.env.PORT);
//cors
/*var whitelist = ['http://localhost:52532','http://localhost:8000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed domain by CORS'))
    }
  }
}*/
app.use(cors({origin: '*'}));
//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas http
app.use(require('./routers/User_routes'));
app.use(require('./routers/Role_routes'));
app.use(require('./routers/Employee_routes'));
app.use(require('./routers/School_routes'));
app.use(require('./routers/Regiones_routes'));
app.use(require('./routers/Municipio_routes'));
app.use(require('./routers/Localidad_routes'));


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.listen(PORT, function(){
    /*try {
            
    conect.sequelize.authenticate();
    console.log('servidor corriendo en el puerto: ' +PORT);
        console.log("Se ha establecido la conexión");
    } catch (error) {
        console.log('Se ha producido un error', error)
    }*/
    
    console.log('servidor corriendo en el puerto: ' +PORT);    
    conect.sequelize.sync({ alter: true }).then(() => {
        console.log("Se ha establecido la conexión");
    }).catch(error => {
        console.log('Se ha producido un error', error)
    })
})


