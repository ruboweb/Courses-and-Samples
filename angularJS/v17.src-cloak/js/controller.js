var app = angular.module("miAppModule",[]);

app.controller("miController", ["$scope", "$http", function($scope,$http){

	$scope.obtener = function(usuario) {
		var url = "https://api.github.com/users/#/repos";
		url = url.replace("#",usuario);		

		$http.get(url)
			.success(function(data) {
				$scope.repos = data;
			})
			.error(function(data) {
				$scope.repos = null;
			});
	}

}]);