var app = angular.module('module',['ngRoute']).config(function($routeProvider){
	$routeProvider
		.when('/primeira',{
			templateUrl:'pages/template1.html'
			,controller:'controller1'
		})
		.when('/segunda',{
			templateUrl:'pages/template2.html'
			,controller:'controller2'
		});
});

app.controller('controller1',['$scope','$filter',function($scope,$filter){
    $scope.url = '';
    $scope.filtro = function(){
        return $filter('lowercase')($scope.url)
    };
}]);

app.controller('controller2',['$scope',function($scope){
}]);
