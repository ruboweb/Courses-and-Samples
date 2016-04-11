var app = angular.module("miApp",[]);

app.filter("removeHtml", function(){
	return function(texto) {
		return String(texto).replace(/<[^>]+>/gm ,'');
	}
});

app.controller("miAppController", ["$scope", function($scope){
	$scope.saludo = "<p>Hola Mundo!</p>"
	$scope.jsonText = {};
	$scope.jsonText.title = "Hola";
	$scope.jsonText.body = "mundo";
	$scope.coste = 2;
	$scope.now = new Date();
}]);