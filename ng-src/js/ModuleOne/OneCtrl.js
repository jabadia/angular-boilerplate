angular.module("ModuleOne")
	.controller('OneCtrl', function($scope)
	{
		$scope.message = "Hello Angular";

		$scope.sayGoodbye = function()
		{
			$scope.message = "Bye Bye Angular";
		};
	});