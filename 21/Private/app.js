angular.module('module',[]).controller('controller',['$scope','$filter',function(a,b){
	a.nome='';
	a.filtrado = () => {
		return b('lowercase')(a.nome);
	};

	a.caracteres = 5;

	a.rules = [
		{rulename:'Primeira linha de regras'}
		,{rulename:'Segunda linha de regras'}
		,{rulename:'Terceira linha de regras'}
		,{rulename:'Quarta linha de regras'}
	];
}]);
