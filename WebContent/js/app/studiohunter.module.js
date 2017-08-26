var studioHunterApp = angular.module('StudioHunterApp', ['ngRoute']); 

studioHunterApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home', {
		// os parâmetros abaixo são respectivamente a URL chamada e o controller utilizado. Desta forma você não utilizaria o "ng-controller" no html. Ver a página cliente.html
		templateUrl:'../view/home.html',
		controller:'clienteController'
	})
//	.otherwise({
//		redirectTo:'/'
//	});
//	
//	// as duas linhas abaixo eliminam o #!(versão 1.6.X do Angular) ou #(outras versões) da URL nas chamadas sem requisição para o servidor.
//	$locationProvider.hashPrefix('');
//	$locationProvider.html5Mode(true);

});

// mock de navegação para rodar em arquivos locais.
studioHunterApp.run(function($templateCache) {
//	var x = $templateCache.get('../view/home.html');
//	var y = $templateCache.get('c:\');
//	console.log(x);
//	console.log(y);
//  $templateCache.put('/view/home.html', 'In the MainView partial <strong>{{message}}</strong>');
});