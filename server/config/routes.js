var orders = require('./../controllers/orders.js');
var customers = require('./../controllers/customers.js');

module.exports = function(app){
	app.get('/customers', function(req, res){
		customers.index(req, res);
	});
	app.post('/customers', function(req, res){
		customers.create(req, res);
	});
}