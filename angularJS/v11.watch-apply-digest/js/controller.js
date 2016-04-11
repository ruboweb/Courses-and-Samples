var app = angular.module("miApp",[]);

app.controller("miAppController", ["$scope", function($scope){
	$scope.nombre = "Ruben";
	/*
	setTimeout(function() {
		// $scope.nombre = "Ruben mod";
		// console.log($scope.nombre);
		// $scope.$digest(); no adecuado, mejor llamar apply
		// $scope.$apply(); 
		
		// En caso de terner que recurrir a esto, hacerlo así.
		$scope.$apply(function(){
			$scope.nombre = "Ruben mod";
		}); 

	},2000);
	*/
	document.querySelector("#mi_boton").addEventListener("click", function(){
		$scope.$apply(function(){
			$scope.nombre = "Ruben mod";
		}); 
		
	});
}]);
