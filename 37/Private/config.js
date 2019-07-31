var myapp = angular.module('myapp',['ngRoute']);

myapp.config(function($routeProvider){
    $routeProvider
    .when('/segundo',{
        controller: 'segundo',
        templateUrl: 'pages/segundo.html'
    })
    .when('/primeiro',{
        controller: 'primeiro',
        templateUrl: 'pages/primeiro.html'
    })
    .when('/',{
        controller: 'main',
        templateUrl: 'pages/main.html'
    });
});

//Controllers
myapp.controller('main',['$scope','main',function($scope,main){
    $scope.person = {
        bairro : 'Castelo Branco',
        cidade : 'João Pessoa',
        estado : 'Paraíba',
        pais : 'Brasil',
        url : main.url
    };

    $scope.endereco=pessoa=>{
        return pessoa.bairro+', '+pessoa.cidade+', '+pessoa.estado+', '+pessoa.pais;
    };

    $scope.url = main.url
    $scope.$watch('url',function(){
        main.url = $scope.url;
    });
}]);

myapp.controller('primeiro',['$scope','primeiro',function($scope,primeiro){
    $scope.url = primeiro.filtro();
    $scope.person = {
        url : primeiro.filtro()
    };
}]);

myapp.controller('segundo',['$scope','segundo',function($scope,segundo){
    $scope.url = segundo.filtro();
    $scope.person = {
        url : segundo.filtro()
    };
}]);

//Services
myapp.service('main',[function(){
    this.url = 'Nitai Charan';
}]);

myapp.service('primeiro',['$filter','main',function($filter,main){
    this.filtro = () =>{
        return $filter('uppercase')(main.url);
    } 
}]);

myapp.service('segundo',['$filter','main',function($filter,main){
    this.filtro = () =>{
        return $filter('lowercase')(main.url);
    } 
}]);

//Directives
myapp.directive('showInstagram',function(){
    return{
        scope:{
            personObject: '=',
            formataEndereco:'&',
            personUrl:'@'
        },
        templateUrl: 'directives/instagram.html',
        replace: true,
        restrict: 'AECM'
    };
});
