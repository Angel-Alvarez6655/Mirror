const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const {mongoose} = require('./database'); 

const app = express();

// Asignar el puerto a traves de Express
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: '*'}));

// Rutas
app.use('/api/viejonas',require('./Routes/viejas.routes'))

// Inicializacion del servidor local.
app.listen(app.get('port'), ()=>{
    var puertecito = app.get('port');
    console.log("Listening through port:", puertecito);
});