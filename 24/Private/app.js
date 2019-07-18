angular.module('module',[]).controller('controller',['$scope','$http','$filter',function($scope,$http,$filter){
	$scope.nome='';
	$scope.rules='';
	$scope.newrule='';

	$scope.filtro=()=>{
		return $filter('lowercase')($scope.nome);
	};

	$scope.pesquisar=()=>{
		$http.get('/rules.json')
			.then(result=>{
				$scope.rules = result.data;
			})
			.catch(result=>{
			});
	};
	$scope.pesquisar();

	$scope.addRule=()=>{
		$http.post('/rules.json',{'rulename' : $scope.newrule})
			.then(result=>{
				$scope.pesquisar();
			})
			.catch(result=>{});
	};
}]);
