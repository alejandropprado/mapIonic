const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let schema_IAddress = new Schema({
	id: Number,
	name: String,
	coords: [{
	    latitude: Number,
	    longitude: Number
	}] 
});

let IAddress =  mongoose.model("IAddress", schema_IAddress);

module.exports = IAddress;