module.exports = (IAddress) => {
	let format = null;

	if(IAddress){
		format = {
			id : IAddress.id,
			name : IAddress.name,
			coords : IAddress.coords
		}
	}

	return format;
}

