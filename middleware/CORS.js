module.exports = (req, resp, next) => {
	resp.header('Access-Control-Allow-Origin', "*"); 
	resp.header('Access-Control-Allow-Methods','GET,POST'); 
	resp.header('Access-Control-Allow-Headers', 'Content-Type'); 
	next();
};