
var app = angular.module("todoListApp",["LocalStorageModule"]);

app.factory("ToDoService", function(localStorageService){
	var toDoService = {};

	toDoService.storage = "todoListAppAngularJs";
	toDoService.activities = [];

	if(localStorageService.get(toDoService.storage)){
		toDoService.activities = localStorageService.get(toDoService.storage);
	}else {
		toDoService.activities = [];	
	}

	toDoService.updateLocalStorage = function(){
		localStorageService.set(toDoService.storage, toDoService.activities);
	}

	toDoService.add = function(newAct){
		toDoService.activities.push(newAct);
		toDoService.updateLocalStorage();
	}

	toDoService.clean = function(){
		toDoService.activities = [];
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	}

	toDoService.getAll = function(){
		return toDoService.activities;
	}

	toDoService.remove = function(item){
		toDoService.activities = toDoService.activities.filter(function(activity){
			return activity !== item;
		});
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	}


	return toDoService;
});

app.controller("toDoController", ["$scope", "ToDoService", function($scope, ts){
		$scope.newActividad = {};
		$scope.todo = ts.getAll();

		$scope.addActividad = function(){
			ts.add($scope.newActividad);
			$scope.newActividad = {};
		}

		$scope.removeActividad = function(item){
			$scope.todo = ts.remove(item);
		}

		$scope.clean = function() {
			$scope.todo = ts.clean();
		}

}]);