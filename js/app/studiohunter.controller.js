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
	
	ctrl.onOkClick = function() {
		
	};
	
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
	    	  parentController: function() {
	                return ctrl;
	        }
	      }
	    });
	  }
	
});


studioHunterApp.controller('LoginModalCtrl', function ($scope, $uibModalInstance, $route, $routeParams, $location, StudioHunterService, parentController) {
	  var $ctrl = this;
	  if(parentController != undefined) {
		  parentController.onOkClick();
	  }

	  $ctrl.login = function () {
		  if($ctrl.usuarioLogado == undefined || $ctrl.usuarioLogado == null || $ctrl.usuarioLogado == '') {
			  $scope.showMensagemCampoObrigatorio = true;
		  } else {
			  $scope.showMensagemCampoObrigatorio = false;
			  console.log($scope.usuarioLogado);
			  StudioHunterService.setUsuarioLogado($ctrl.usuarioLogado);
//			  $location.path('/perfil');
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

studioHunterApp.controller('ResultadoPesquisaController', function($uibModal, StudioHunterService, $scope, $route, $routeParams, $location) { 
	
	var ctrl=this;
	ctrl.minValue = 20;
	ctrl.maxValue = 500;
	
	
	ctrl.onEstudioClick = function() {
		ctrl.usuarioLogado = StudioHunterService.getUsuarioLogado();
		if(ctrl.usuarioLogado != undefined) {
			$location.path('/detalhes');
		} else {
			var modalInstance = $uibModal.open({
			      animation: true,
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
		
	};
	
});

studioHunterApp.controller('DetalhesController', function($uibModal, $scope, $route, $routeParams, $location, StudioHunterService) { 
	
	var ctrl=this;
	ctrl.onAgendamentoClick = function() {
		var usuarioLogado = StudioHunterService.getUsuarioLogado();
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

studioHunterApp.controller('LoginRequeridoCtrl', function (parentController, $uibModal, $scope, $uibModalInstance, $route, $routeParams, $location, StudioHunterService) {
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
		      resolve: {
		    	  parentController: function(){
		                return $ctrl;
		        }
		      }
		    });
	}
});

studioHunterApp.controller('MensagemSucessoCtrl', function (parentController, $scope, $uibModalInstance, $route, $routeParams, $location, StudioHunterService) {
	  var ctrl = this;
	  ctrl.teste='fdsfdsfdsf';
	  if(parentController != undefined) {
		  parentController.onCancelarClick();
	  };
	  
	  ctrl.clique = function() {
		  console.log(ctrl);
		  
	  };
	  
	  ctrl.onOkClick = function() {
		  $uibModalInstance.close();
		  $location.path('/perfil');
	  };
	  
});