var myapp = angular.module('myapp',['ngRoute']);
myapp.config(function($routeProvider){
    $routeProvider
        .when('/primeiro',{
            templateUrl: 'pages/primeiro.html'
            ,controller: 'primeiro'
        })
        .when('/segundo',{
            templateUrl: 'pages/segundo.html'
            ,controller: 'segundo'
        })
        .when('/',{
            templateUrl: 'pages/main.html'
            ,controller: 'main'
        });
});

myapp.controller('segundo',['$scope','segundo','main', function($scope,segundo,main){
    $scope.url = segundo.filtro();
}]);
myapp.service('segundo',['main','$filter',function(main,$filter){
    this.filtro = () => {
        return $filter('lowercase')(main.url)
    };
}]);

myapp.controller('primeiro',['$scope','primeiro','main', function($scope,primeiro,main){
    $scope.url = primeiro.filtro();
}]);
myapp.service('primeiro',['main','$filter',function(main,$filter){
    this.filtro = () =>{
        return $filter('uppercase')(main.url)
    };
}]);

myapp.controller('main',['$scope','main', function($scope,main){
    $scope.url = main.url;
    $scope.$watch('url',function(){
        main.url = $scope.url;
    });
}]);
myapp.service('main',[function(){
    this.url = 'Nitai Charan';
}]);

myapp.directive('showInstagram',function(){
    return {
        restrict: 'AECM',
        replace: true,
        templateUrl: 'directives/instagram.html'
    }
});
