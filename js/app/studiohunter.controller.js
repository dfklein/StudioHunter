studioHunterApp.controller('MainController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	ctrl.onLogoClick = function() {
		$location.path('/');
	};
	
	
});


studioHunterApp.controller('HomeController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	
	ctrl.onBuscarClick = function() {
		$location.path('/resultadopesquisa');
	};
	
	
});

studioHunterApp.controller('ResultadoPesquisaController', function($scope, $route, $routeParams) { 
	
	var ctrl=this;
	ctrl.minValue = 20;
	ctrl.maxValue = 500;
	
});