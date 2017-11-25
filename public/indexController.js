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
            if (res.length > 0) {
              console.log(res);
                $scope.results = res;
            } else {
                var by = $scope.by;
                var noRes = '[{"' + by + '":"Sua pesquisa não encontrou resultados, por favor, tente com um novo texto."}]';
                $scope.results = JSON.parse(noRes);
            }

          })
          .error(function(res){
            console.log(res);
          });
        }
    };
