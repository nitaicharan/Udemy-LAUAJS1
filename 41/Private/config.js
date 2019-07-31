var myapp = angular.module('myapp',['ngRoute']);
myapp.config(function($routeProvider){
    $routeProvider
        .when('/lowercase',{
            templateUrl: 'pages/lowercase.html',
            controller:'lowercase'
        })
        .when('/uppercase',{
            templateUrl: 'pages/uppercase.html',
            controller:'uppercase'
        })
        .when('/',{
            templateUrl: 'pages/main.html',
            controller:'main'
        });
});

myapp.directive('showInstagram',function(){
    return {
        templateUrl:'directives/instagram.html',
        replace: true,
        restrict: 'ECMA',
        scope: {
            person: '=',
            aaa: '@',
            address: '&'
        },
        link: function(scope, elements, attrs){
            if(scope.aaa === 'Nitai Charan'){
                elements.removeAttr('class');
            }
        },
        transclude: true
    }
});

myapp.controller('main',['$scope','main',function($scope,main){
    $scope.endereco=(pessoa)=>{
        return pessoa.cidade+', '+pessoa.estado;
    };
    $scope.pessoas = [
        {
            nome:'Nitai Charan',
            cidade: 'Belo Horizonte',
            estado: 'Minas Gerais',
            cell: '+666 (666) 66666-6666'
        },
        {
            nome:'Mustafary',
            cidade: 'Natureza',
            estado: 'Mundo',
            cell: '+0 (0) 0-0'
        },
        {
            nome:'Away',
            cidade: 'Petrópoles',
            estado: 'São Paulo',
            cell: '+222 (222) 22222-2222'
        }
    ];
    $scope.url = main.url;
    $scope.$watch('url',function(){
        main.url = $scope.url;
    });
}]);
myapp.controller('uppercase',['$scope','uppercase',function($scope,uppercase){
    $scope.url = uppercase.filtro();
}]);
myapp.controller('lowercase',['$scope','lowercase',function($scope,lowercase){
    $scope.url = lowercase.filtro();
}]);

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
