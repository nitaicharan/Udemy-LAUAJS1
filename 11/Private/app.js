var modulo = angular.module('modulo',[]);
var controller = modulo.controller('controller', function($scope){
	console.log($scope);

	$scope.nome = 'Nitai Charan';
	$scope.funcao = () => {
		console.log('Nitai Charan');
	};
});
