var app = angular.module("miAppModule",[]);

app.controller("miController", ["$scope", "$http", function(s,h){

	s.posts = [];

	h.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			s.posts = data;
		})
		.error(function(err){
			console.log(err);
		});

}]);