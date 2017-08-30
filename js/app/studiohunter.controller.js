studioHunterApp.service('StudioHunterService', function() {
	var usuarioLogado;
	
	this.getUsuarioLogado= function() {
		return this.usuarioLogado;
	}
	
	this.setUsuarioLogado = function(usuarioLogado) {
		this.usuarioLogado = usuarioLogado;
	}
	
});

studioHunterApp.controller('MainController', function($uibModal, $scope, $route, $routeParams, $location) { 
	var ctrl=this;
	
	$scope.showMensagemCampoObrigatorio = false;
	
	ctrl.onLogoClick = function() {
		$location.path('/');
	};
	
	$scope.onBuscarClick = function() {
		$location.path('/resultadopesquisa');
	};
	
	ctrl.animationsEnabled = true;

	ctrl.openLoginModal = function (size, parentSelector) {
	    var modalInstance = $uibModal.open({
	      animation: ctrl.animationsEnabled,
	      ariaLabelledBy: 'modal-title',
	      ariaDescribedBy: 'modal-body',
	      templateUrl: 'view/loginmodal.html',
	      controller: 'ModalInstanceCtrl',
	      controllerAs: 'modalCtrl',
	      size: size,
	      scope: $scope,
	      resolve: {
	        items: function () {
	          return ctrl.items;
	        }
	      }
	    });
	  }
	
});


studioHunterApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $route, $routeParams, $location, StudioHunterService) {
	  var $ctrl = this;

	  $ctrl.login = function () {
		  if($ctrl.usuarioLogado == undefined || $ctrl.usuarioLogado == null || $ctrl.usuarioLogado == '') {
			  $scope.showMensagemCampoObrigatorio = true;
		  } else {
			  $scope.showMensagemCampoObrigatorio = false;
			  console.log($scope.usuarioLogado);
			  StudioHunterService.setUsuarioLogado($ctrl.usuarioLogado);
			  $location.path('/perfil');
			  $uibModalInstance.dismiss();
		  }
	  };
});

studioHunterApp.controller('HomeController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	
});
studioHunterApp.controller('PerfilController', function($scope, $route, $routeParams, $location, StudioHunterService) { 
	var ctrl=this;
	ctrl.usuarioLogado = StudioHunterService.getUsuarioLogado();
	ctrl.onEstudioClick = function() {
		$location.path('/detalhes');
	};
	
});

studioHunterApp.controller('ResultadoPesquisaController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	ctrl.minValue = 20;
	ctrl.maxValue = 500;
	ctrl.onEstudioClick = function() {
		$location.path('/detalhes');
	};
	
});

studioHunterApp.controller('DetalhesController', function($scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	ctrl.onAgendamentoClick = function() {
		$location.path('/agendamento');
	};
	
});

studioHunterApp.controller('AgendamentoController', function($uibModal, $scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	
	ctrl.animationsEnabled = true;
	ctrl.onAgendamentoClick = function() {
		var modalInstance = $uibModal.open({
		      animation: ctrl.animationsEnabled,
		      ariaLabelledBy: 'modal-title',
		      ariaDescribedBy: 'modal-body',
		      templateUrl: 'view/mensagemSucesso.html',
		      controller: 'MensagemSucessoCtrl',
		      controllerAs: 'sucessoCtrl',
		      scope: $scope,
		      resolve: {
		        items: function () {
		          return ctrl.items;
		        }
		      }
		    });
		  }
		
	
});

studioHunterApp.controller('MensagemSucessoCtrl', function ($scope, $uibModalInstance, $route, $routeParams, $location, StudioHunterService) {
	  var $ctrl = this;
	  
	  $ctrl.onOkClick = function() {
		  $uibModalInstance.dismiss();
	  }
});