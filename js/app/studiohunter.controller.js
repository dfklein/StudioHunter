studioHunterApp.controller('MainController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	ctrl.onLogoClick = function() {
		$location.path('/');
	};
	
	$scope.onBuscarClick = function() {
		$location.path('/resultadopesquisa');
	};
	
});


studioHunterApp.controller('HomeController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	
	
	
});

studioHunterApp.controller('ResultadoPesquisaController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	ctrl.minValue = 20;
	ctrl.maxValue = 500;
	
});

studioHunterApp.controller('DetalhesController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	
});