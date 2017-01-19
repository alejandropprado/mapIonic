const express = require("express");
const router = express.Router();
const IAddress = require('../models/IAddress');
const formatAddress =  require('../middleware/formatAddress');

router.get('/iaddress', (req, resp) => {
	IAddress.find( (err, iaddress) => {
		if(err) return resp.status(500).json({ message : err });
		if(!iaddress) return resp.status(404).json({ message : 'No se han encontrado direcciones' });

		let data = [];

		for (var i = iaddress.length - 1; i >= 0; i--) {
			data.push(formatAddress(iaddress[i]));
		}

		return resp.status(200).json( { IAddress :  data } );
	});

});

router.post('/iaddress', (req, resp) => {

	let data = {
		name : req.body.name,
		coords : req.body.coords
	};

	let address = new IAddress(data);

	address.save( (err, newIAddress) => {
		if (err) return resp.status(500).json( {message : err });

		resp.status(200).json({ IAddress : formatAddress(newIAddress) });

	});

});

module.exports = router;