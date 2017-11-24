var index = angular.module('index', []);

function indexController($scope, $http) {
    $scope.formData = {};

    $scope.list = function(searchType) {
	    $http.get('/user/by-name', $scope.formData)
	        .success(function(data) {
	            $scope.formData = {}; 
	            $scope.result = data;
	            console.log(data);
	            console.log(searchType);
	        })
	        .error(function(data) {
	            console.log('Error: ' + data);
	        });
    };
}