var app = angular.module("miAppModule",[]);

app.controller("miController", ["$scope", "$http", function(s,h){

	s.posts = [];
	s.newPost = {};

	h.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			s.posts = data;
		})
		.error(function(err){
			console.log(err);
		});

	// funcion de scope para post
	s.addPost = function() {
		h.post("http://jsonplaceholder.typicode.com/posts", {
			title: s.newPost.title,
			body: s.newPost.body,
			userId: 1
		})


		.success(function(data, status, headers, config){
			s.posts.push(s.newPost);
			s.newPost = {};
		})

		.error(function(err) {
				console.log(err);
		});
	}	

}]);