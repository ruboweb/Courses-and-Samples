angular.module("miAppModule")

.directive("autoComplete", function(){
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
})

.directive("backImg", function(){
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