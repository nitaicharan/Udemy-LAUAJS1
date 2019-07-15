angular.module('module',[]).controller('controller',['$scope','$filter','$timeout', function($scope,$filter,$timeout){
	$scope.nome = '';
	$scope.filtrado = () => {
		return $filter('lowercase')($scope.nome);
	};

	$scope.$watch('nome',function(newValue, oldValue){
		console.info('Mudou!!');
		console.log('Old: '+oldValue);
		console.log('New: '+newValue);
	});

	setTimeout(function(){
		$scope.$apply(function(){
			$scope.nome = 'NITAICHARAN'
			console.log('O scopo mudou!');
		});
	},3000);

	$timeout(function(){
		$scope.nome = 'EUMESMO'
		console.log('O scopo mudou NOVAMENTE!');
	},6000)
}]);
