function GreetingController($scope) {
	$scope.name = 'May'
	$scope.getName = function() {
    	return $scope.name
  	}
    $scope.clearName = function() {
        $scope.name = ''
        return $scope.name
    }
};
