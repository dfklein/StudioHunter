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
	      animation: true,
	      ariaLabelledBy: 'modal-title',
	      ariaDescribedBy: 'modal-body',
	      templateUrl: 'view/loginmodal.html',
	      controller: 'LoginModalCtrl',
	      controllerAs: 'modalCtrl',
	      size: 'md',
	      scope: $scope,
	      resolve: {
	    	  parentController: function(){
	                return ctrl;
	        }
	      }
	    });
	  }
	
});


studioHunterApp.controller('LoginModalCtrl', function ($scope, $uibModalInstance, $route, $routeParams, $location, StudioHunterService, parentController) {
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
	  
	  $ctrl.close = function() {
		  $uibModalInstance.close();
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

studioHunterApp.controller('DetalhesController', function($uibModal, $scope, $route, $routeParams, $location, StudioHunterService) { 
	
	var ctrl=this;
	var usuarioLogado = StudioHunterService.getUsuarioLogado();
	ctrl.onAgendamentoClick = function() {
		if(usuarioLogado == undefined || usuarioLogado == null || usuarioLogado == '') {
			
			ctrl.animationsEnabled = true;
			ctrl.onAgendamentoClick = function() {
				var modalInstance = $uibModal.open({
				      animation: ctrl.animationsEnabled,
				      ariaLabelledBy: 'modal-title',
				      ariaDescribedBy: 'modal-body',
				      templateUrl: 'view/mensagemLoginRequerido.html',
				      controller: 'LoginRequeridoCtrl',
				      controllerAs: 'loginRequeridoCtrl',
				      scope: $scope,
				      size: 'md',
				      resolve: {
				    	  parentController: function(){
				                return ctrl;
				        }
				      }
				    });
				  }
			
		} else {
			$location.path('/agendamento');
			
		}
	};
	
});

studioHunterApp.controller('AgendamentoController', function($uibModal, $scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	
	ctrl.onAgendamentoClick = function() {
		  var modalInstance = $uibModal.open({
			  animation: true,
			  ariaLabelledBy: 'modal-title',
			  ariaDescribedBy: 'modal-body',
			  templateUrl: 'view/agendamentoModal.html',
			  controller: 'AgendamentoModalCtrl',
			  controllerAs: 'agendamentoCtrl',
			  scope: $scope,
			  size: 'md',
			  resolve: {
				  parentController: function(){
					  return ctrl;
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

studioHunterApp.controller('AgendamentoModalCtrl', function ($uibModal, $scope, $uibModalInstance, $route, $routeParams, $location, StudioHunterService) {
	var ctrl = this;
	
	ctrl.onEfetivarAgendamentoClick = function() {
		  var modalInstance = $uibModal.open({
			  animation: true,
			  ariaLabelledBy: 'modal-title',
			  ariaDescribedBy: 'modal-body',
			  templateUrl: 'view/mensagemSucesso.html',
			  controller: 'MensagemSucessoCtrl',
			  controllerAs: 'sucessoCtrl',
			  scope: $scope,
			  size: 'md',
			  resolve: {
				  parentController: function(){
					  return ctrl;
			      }
			  }
		  });
	  }
	
	
	ctrl.onCancelarClick = function() {
		$uibModalInstance.close();
	}
});

studioHunterApp.controller('LoginRequeridoCtrl', function ($uibModal, $scope, $uibModalInstance, $route, $routeParams, $location, StudioHunterService) {
	var $ctrl = this;
	
	$ctrl.onOkClick = function() {
		$uibModalInstance.close();
	}
	
	$ctrl.onLoginClick= function() {
		var modalInstance = $uibModal.open({
		      animation: true,
		      ariaLabelledBy: 'modal-title',
		      ariaDescribedBy: 'modal-body',
		      templateUrl: 'view/loginmodal.html',
		      controller: 'LoginModalCtrl',
		      controllerAs: 'modalCtrl',
		      size: 'md',
		      scope: $scope,
		      resolve: {
		    	  parentController: function(){
		                return $ctrl;
		        }
		      }
		    });
	}
});