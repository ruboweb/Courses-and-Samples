
var app = angular.module("todoListApp",["LocalStorageModule"]);

app.service("ToDoService", function(localStorageService){
	this.storage = "todoListAppAngularJs";
	this.activities = [];

	if(localStorageService.get(this.storage)){
		this.activities = localStorageService.get(this.storage);
	}else {
		this.activities = [];	
	}

	this.updateLocalStorage = function(){
		localStorageService.set(this.storage, this.activities);
	}

	this.add = function(newAct){
		this.activities.push(newAct);
		this.updateLocalStorage();
	}

	this.clean = function(){
		this.activities = [];
		this.updateLocalStorage();
		return this.getAll();
	}

	this.getAll = function(){
		return this.activities;
	}

	this.remove = function(item){
		this.activities = this.activities.filter(function(activity){
			return activity !== item;
		});
		this.updateLocalStorage();
		return this.getAll();
	}
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