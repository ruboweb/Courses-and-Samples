var app = angular.module("miAppModule",[]);

app.controller("miController", ["$scope", "$http", function(s,h){
	s.loading = true;
	s.posts = [];

	h.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			s.posts = data;
			s.loading = false;
		})
		.error(function(err){
			console.log(err);
			s.loading = false;
		});

}]);