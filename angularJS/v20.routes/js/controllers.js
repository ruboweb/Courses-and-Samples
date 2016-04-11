
var url_repos = "https://api.github.com/users/codigofacilito/repos";
var url_repo = "https://api.github.com/repos/codigofacilito/";

angular.module("miAppModule")

.controller("ReposController", ["$scope", "$http", function($scope,$http){
	$scope.repos = [];

	$http.get(url_repos)
		.success(function(data) {
			$scope.posts = data;
			for (var i = data.length - 1; i >= 0; i--) {
				var repo = data[i];
				$scope.repos.push(repo.name);
			};
		})
		.error(function(data) {
			console.log("Error cargando datos");
		});

	$scope.optionSelected = function(data){
		$scope.$apply(function() {
			$scope.main_repo = data;
		})
	}	

}])

.controller("RepoController", ["$scope", "$http", "$routeParams", function($scope,$http,$routeParams){
	$scope.repo = {};

	$http.get(url_repo + $routeParams.name)

		.success(function(data) {
			$scope.repo = data;
			
		})
		.error(function(data) {
			console.log("Error cargando datos");
		});

	$scope.optionSelected = function(data){
		$scope.$apply(function() {
			$scope.main_repo = data;
		})
	}	

}]);