/*
 *	Require
 */
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config.js');
const bodyParser = require('body-parser');
const IAddressRoute = require('./router/IAddressRoute');
const cors = require('./middleware/CORS');
const init = require('./config/init');

/*
 *	Instancias
 */
const app = express();

/*
 * Configuraciones
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

/*
 *	Rutas
 */
app.use('/api',IAddressRoute);



/*
 * Inicio
 */

mongoose.connect(config.DB, (err) => {
	if(err) return console.log('¡ERROR AL CONECTAR LA BASE DE DATOS!');

	app.listen(config.Port, (err) => {
		if(!err){
			console.log(`Conexión iniciada en el puerto ${config.Port}`)
		}else {
			console.log(err);
		}
	});
});

/*init*/
app.get('/initDB', (req, resp) => {
	init();
	resp.send('DATOS INICIALIZADOS');
});