var app = angular.module("miAppModule",[]);

app.directive("backImg", function(){
	return function(scope, element, attrs){

		// acceder al valor
		attrs.$observe("backImg", function(value){
			element.css({
				"background": "url("+value+")",
				"background-position": "center",
				"background-size": "cover"
			});
		});
	}
});


app.controller("miController", ["$scope", "$http", function($scope,$http){

	$http.get("https://api.github.com/users/codigofacilito/repos")
		.success(function(data) {
			$scope.repos = data;
		})
		.error(function(data) {
			console.log("Error cargando datos");
		});

}]);