angular.module('module',[]).controller('controller',['$scope','$filter',function(a,b){
	a.handle = '';
	a.deixacaixabaixa = () => {
		return b('lowercase')(a.handle);
	};
}]);
