var app = angular.module("miAppModule",[]);

app.controller("miController", ["$scope", function(s){
	
	// variables
	s.nombre = "Rubo";
	s.nuevoComentario = {};

	// Array json
	s.comentarios = [
		{
			comentario: "Haciendo el curso",
			username: "Rubo"
		},
		{
			comentario: "Yo también lo estoy haciendo",
			username: "Pepe"
		}
	];

	s.crearComentario = function(){
		s.comentarios.push(s.nuevoComentario)
		s.nuevoComentario = {}
	};

}]);