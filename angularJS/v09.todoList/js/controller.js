var storage = "todoListAppAngularJs";

var app = angular.module("todoListApp",["LocalStorageModule"]);

app.controller("toDoController", ["$scope", "localStorageService", function(s, lss){
	if(lss.get(storage)){
		s.todo = lss.get(storage);
	}else {
		s.todo = [];	
	}

	s.$watchCollection('todo', function(newValue, oldValue) {
		lss.set(storage, s.todo);
	});

	s.addActividad = function(){
		s.todo.push(s.newActividad);
		s.newActividad = {};
	}

	s.clean = function() {
		s.todo = [];
	}

}]);