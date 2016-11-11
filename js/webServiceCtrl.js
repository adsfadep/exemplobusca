
angular.module('webServiceApp', []);

angular.module('webServiceApp').controller('webServiceCtrl', function($scope, $http){

	$scope.nameApp = 'Web Service';

	$scope.ip = 'localhost:8080';
	$scope.servicoSomar = '/HelloWorldWs/ws/teste/somar';
	$scope.servicoLerArquivo = '/HelloWorldWs/ws/servicos/lerArquivo';

	$scope.somar = function(num1, num2) {
		$http.get('http://' + $scope.ip + $scope.servicoSomar, {params:{num1:num1,num2:num2}})
			.success(function(resultado) {
				$scope.resultado = resultado;
			});
	}

	$scope.lerArquivo = function() {
		$http.get('http://' + $scope.ip + $scope.servicoLerArquivo)
			.success(function(resultado) {
				$scope.conteudoArquivo = resultado;
			});
	}
});
