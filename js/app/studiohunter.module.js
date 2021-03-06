var studioHunterApp = angular.module('StudioHunterApp', ['ngRoute', 'rzModule', 'ui.bootstrap']); 

studioHunterApp.config(function($routeProvider, $locationProvider) {
//	var PATH = '../view/';
	var PATH = '../dfklein.github.io/view/';
	
	
	$routeProvider
	.when('/', {
		templateUrl: PATH + 'home.html',
		controller:'HomeController',
		controllerAs: 'homeVm'
	})
	.when('/home', {
		templateUrl: PATH + 'home.html',
		controller:'HomeController',
		controllerAs: 'homeVm'
	})
	.when('/perfil', {
		templateUrl: PATH + 'perfillogado.html',
		controller:'PerfilController',
		controllerAs: 'perfilVm'
	})
	.when('/resultadopesquisa', {
		templateUrl: PATH + 'resultadopesquisa.html',
		controller:'ResultadoPesquisaController',
		controllerAs: 'resultadoVm'
	})
	.when('/detalhes', {
		templateUrl: PATH + 'detalheestudio.html',
		controller:'DetalhesController',
		controllerAs: 'detalheVm'
	})
	.when('/agendamento', {
		templateUrl: PATH + 'agendamento.html',
		controller:'AgendamentoController',
		controllerAs: 'agendamentoVm'
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