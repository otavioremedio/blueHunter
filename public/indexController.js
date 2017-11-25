var index = angular.module('index', []);

function indexController($scope, $http) {
    $scope.formData = {};
    $scope.results = {};
    //escolha default
    $scope.by = "name";
    $scope.type = "user";

    $scope.list = function() {
        $scope.results = {};
        $http.get(`/${$scope.type}/by-${$scope.by}`, {params:{"value": $scope.text}})
          .success(function(res){
            $scope.results = res;
          })
          .error(function(res){
            console.log(res);
          });
        }
    };
