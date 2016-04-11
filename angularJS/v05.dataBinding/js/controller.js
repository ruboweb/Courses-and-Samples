var app = angular.module("miAppModule",[]);

app.controller("miController", function($scope){
	
	// variables
	$scope.nombre = "Rubo";
	$scope.nuevoComentario = {};

	// Array json
	$scope.comentarios = [
		{
			comentario: "Haciendo el curso",
			username: "Rubo"
		},
		{
			comentario: "Yo también lo estoy haciendo",
			username: "Pepe"
		}
	];

	$scope.crearComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario)
		$scope.nuevoComentario = {}
	};

});