const IAddress = require('../models/IAddress');

module.exports = () => {
	let data = [
	{    
		id: 1,    
		name: 'Patronato 344, Recoleta',    
		coords: [{        
			latitude: -33.429473,        
			longitude: -70.644226,    
		}] 
	},
	{    
		id: 2,    
		name: 'Santa María 0410, Providencia',    
		coords: [{        
			latitude: -33.4341774,		
			longitude: -70.6312327,    
		}] 
	}]

	for (var i = data.length - 1; i >= 0; i--) {
		let iaddress = new IAddress(data[i]);

		iaddress.save( (err, address) => {
			if(err) console.log(err);

			console.log('dato inicializado');
		}); 
	}
}