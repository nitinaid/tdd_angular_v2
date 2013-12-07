describe('GreetingController', function() {
    var $scope;
    beforeEach(inject(function($rootScope, $controller) {
		var configuration;
        $scope = $rootScope.$new() 
		configuration = {$scope: $scope}
        $controller('GreetingController', configuration)
    }))
	
    it('should have name as May by default', function() {
        expect($scope.getName()).toEqual('May')
    })
	
	it('should return Jua when name is Jua', function(){
		$scope.name = 'Jua'
		expect($scope.getName()).toEqual('Jua')
	})

    it('should clear name', function(){
        $scope.clearName();
        expect($scope.getName()).toEqual('')

    })
})

