var myApp = angular.module('modulo', []);

myApp.controller('controlador', ['$scope', '$log','$timeout', function(a, b,c) {
	b.info("Nitai Charan");
	a.nome='Nitai Charan';
	c(function(){
		a.nome = "Nimai Charan"
	}, 3000);
}]);
