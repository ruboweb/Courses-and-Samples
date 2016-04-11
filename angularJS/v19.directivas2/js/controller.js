var app = angular.module("miAppModule",[]);

app.directive("autoComplete", function(){
	function link(scope, element, attrs) {
		$(element).autocomplete({
			source: scope.$eval(attrs.autoComplete),
			select: function(ev, ui){
				ev.preventDefault();

				if(ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			focus: function(ev, ui) {
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return {
		link: link
	};
});

app.directive("backImg", function(){
	return function(scope, element, attrs){

		// acceder al valor
		attrs.$observe("backImg", function(value){
			element.css({
				"background": "url("+value+")",
				"background-position": "center",
				"background-size": "cover"
			});
		});
	}
});


app.controller("miController", ["$scope", "$http", function($scope,$http){
	$scope.repos = [];

	$http.get("https://api.github.com/users/codigofacilito/repos")
		.success(function(data) {
			$scope.posts = data;
			for (var i = data.length - 1; i >= 0; i--) {
				var repo = data[i];
				$scope.repos.push(repo.name);
			};
		})
		.error(function(data) {
			console.log("Error cargando datos");
		});

	$scope.optionSelected = function(data){
		$scope.$apply(function() {
			$scope.main_repo = data;
		})
	}	

}]);