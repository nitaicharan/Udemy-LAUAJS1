var myapp = angular.module('myapp',['ngRoute','ngResource']);
myapp.config(function($routeProvider){$routeProvider
        .when('/uppercase',{
            controller: 'uppercase',
            templateUrl: 'pages/uppercase.html'
        })
        .when('/lowercase',{
            controller: 'lowercase',
            templateUrl: 'pages/lowercase.html'
        })
        .when('/',{
            controller: 'main',
            templateUrl: 'pages/main.html'
        });
});

//CONTROLLERS
myapp.controller('main',['$scope','$resource','main',function($scope,$resource,main){
    $scope.pessoas = [
        {
            nome:'Nitai',
            sobrenome:'Charan',
            cidade: 'Belo Horizonte',
            estado: 'Minas Gerais',
            cell: '+666 (666) 66666-6666'
        },
        {
            nome:'Mustafary',
            sobrenome:'',
            cidade: 'Natureza',
            estado: 'Mundo',
            cell: '+0 (0) 0-0'
        },
        {
            nome:'Away',
            sobrenome:'de Petrópoles',
            cidade: 'Petrópoles',
            estado: 'São Paulo',
            cell: '+222 (222) 22222-2222'
        }
    ];
    $scope.address = function(individuo){
        return individuo.cidade+', '+individuo.estado;
    };
    $scope.url = main.url;
    $scope.$watch('url',function(){
        main.url = $scope.url;
    });
    $scope.api = $resource(
        'https://swapi.co/api/'
        ,{
            callback: 'JSON_CALLBACK'
        }
        ,{
            get:
            {
                method: 'JSONP'
            }
        }
    );

    $scope.resultado = $scope.api.get();
    console.log($scope.resultado);
}]);

myapp.controller('uppercase',['$scope','uppercase',function($scope,uppercase){
    $scope.url = uppercase.filtro();
}]);
myapp.controller('lowercase',['$scope','lowercase',function($scope,lowercase){
    $scope.url = lowercase.filtro();
}]);

//SERVICES
myapp.service('main',[function(){
    this.url = 'Nitai Charan';
}]);
myapp.service('uppercase',['$filter','main',function($filter,main){
    this.filtro=()=>{
        return $filter('uppercase')(main.url);
    };
}]);
myapp.service('lowercase',['$filter','main',function($filter,main){
    this.filtro=()=>{
        return $filter('lowercase')(main.url);
    };
}]);

//DIRECTIVES
myapp.directive('showInstagram',function(){
    return {
        templateUrl: 'directives/instagram.html',
        restrict: 'ACME',
        replace: true,
        transclude: true,
        scope: {
            nomeCompleto: '@',
            personObject: '=',
            endereco: '&'
        }
    };
});
