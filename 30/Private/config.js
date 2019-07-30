var myapp = angular.module('myapp',['ngRoute']).config(function($routeProvider){
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


myapp.controller('main',['$scope','main',function($scope,main){
    $scope.url = main.url;
    $scope.$watch('url',function(){
        main.url = $scope.url;
    });
}]);
myapp.service('main',function(){
    this.url = 'Nitai Charan';
});

myapp.controller('primeiro',['$scope','primeiro','main',function($scope,primeiro,main){
    $scope.url = primeiro.ucurl();
    $scope.$watch('url',function(){
        main.url = $scope.url;
    });
}]);
myapp.service('primeiro',['main', '$filter',function(main,$filter){
    this.ucurl=()=>{
        return $filter('uppercase')(main.url)
    };
}]);

myapp.controller('segundo',['$scope','segundo','main',function($scope,segundo,main){
    $scope.url = segundo.lcurl();
    $scope.$watch('url',function(){
        main.url = $scope.url;
    });
}]);
myapp.service('segundo',['main', '$filter',function(main,$filter){
    this.lcurl=()=>{
        return $filter('lowercase')(main.url)
    };
}]);
