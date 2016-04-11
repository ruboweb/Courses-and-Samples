angular.module("FinalApp")
	.controller("MainController", function($scope,$resource,PostResource){
		User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});
		$scope.posts = PostResource.query();
		$scope.users = User.query();

		$scope.removePost = function (post) {
			PostResource.delete({id: post.id}, function(data) {
				//console.log(data);
			});

			// como no borra del api, lo simulamos
			$scope.posts = $scope.posts.filter(function (element) {
				return element.id !== post.id;
			});			
		}
	})

	.controller("PostController", function($scope, $routeParams, PostResource, $location){
		$scope.post = PostResource.get({id: $routeParams.id});
		$scope.titulo_pagina = "Editar Post";

		$scope.savePost = function() {
			PostResource.update({id: $scope.post.id}, {data: $scope.post}, function (data) {
				console.log(data);
				$location.path("/post/" + $scope.post.id);
			});
		};

	})

	.controller("NewPostController", function($scope, PostResource, $location){
		$scope.post = {};
		$scope.titulo_pagina = "Crear Post";

		$scope.savePost = function() {
			PostResource.save({data: $scope.post}, function (data) {
				console.log(data);
				$location.path("/");
			});
		};
	})
;