var app = angular.module("miApp",[]);

app.run(function($rootScope) {
	$rootScope.nombre = "Ruben";
});



app.controller("miAppController", ["$scope", "$rootScope", function($scope,$rootScope){
	$scope.nombre = "Ruben hijo";
}]);


app.controller("childMiAppController", ["$scope", "$rootScope", function($scope,$rootScope){
	$scope.nombre = "Ruben hijo hijo";
}]);