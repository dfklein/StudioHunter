var studioHunterApp = angular.module('StudioHunterApp', ['ngRoute']); 

studioHunterApp.config(function($routeProvider, $locationProvider) {
//	var PATH = '../view/';
	var PATH = '../dfklein.github.io/view/';
	
	
	$routeProvider
	.when('/', {
		// os parâmetros abaixo são respectivamente a URL chamada e o controller utilizado. Desta forma você não utilizaria o "ng-controller" no html. Ver a página cliente.html
		templateUrl: PATH + 'home.html',
		controller:'HomeController',
		controllerAs: 'homeVm'
	})
	.when('/home', {
		// os parâmetros abaixo são respectivamente a URL chamada e o controller utilizado. Desta forma você não utilizaria o "ng-controller" no html. Ver a página cliente.html
		templateUrl: PATH + 'home.html',
		controller:'HomeController',
		controllerAs: 'homeVm'
	})
	.when('/resultadopesquisa', {
		// os parâmetros abaixo são respectivamente a URL chamada e o controller utilizado. Desta forma você não utilizaria o "ng-controller" no html. Ver a página cliente.html
		templateUrl: PATH + 'resultadopesquisa.html',
		controller:'ResultadoPesquisaController',
		controllerAs: 'resultadoVm'
	})
	.otherwise({
		redirectTo:'/',
		controller:'HomeController',
		controllerAs: 'homeVm'
	});
//	
//	// as duas linhas abaixo eliminam o #!(versão 1.6.X do Angular) ou #(outras versões) da URL nas chamadas sem requisição para o servidor.
//	$locationProvider.hashPrefix('');
//	$locationProvider.html5Mode(true);

});