var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return{
		index: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log('error finding customers');
				} else{
					console.log('found customers');
					res.json(results);
				};
			});
		},
		create: function(req, res){
			console.log('made it to create');
			var customer = new Customer({name: req.body.name});
			customer.save(function(err, results){
				if(err){
					console.log('error saving customer' + customer.errors);
				} else{
					console.log('saved customer');
					res.json(results);
				};
			});
		}
	}
})();
