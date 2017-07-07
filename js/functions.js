angular.module('mamta',['chart.js','ngMap'])

.controller('mainController',['$scope','NgMap', function($scope, NgMap){
		
	$scope.openTodo = function(param){
		console.log(param == 3)
		document.getElementById("layer").style.height = "100%";
			if(param == 1){
				$scope.requests = true
				$scope.todo = false
				$scope.analytics = false
				$scope.team = false
			}else if(param == 2){
				$scope.requests = false
				$scope.todo = true
				$scope.analytics = false
				$scope.team = false
			}else if(param == 3){
				$scope.requests = false
				$scope.todo = false
				$scope.analytics = true
				$scope.team = false
			}else if(param == 4){
				$scope.requests = false
				$scope.todo = false
				$scope.analytics = false
				$scope.team = true
			}else{
				$scope.message = "None"
			}	
	}
	$scope.minimizeLayer = function(){
		document.getElementById("layer").style.height = "0";
	}

	NgMap.getMap().then(function(map) {
            $scope.map = map;
        });
        $scope.cities = [
            { id: 1, name: 'Investment Park', pos: [24.9865982,55.162997] },
            { id: 2, name: 'German Community', pos: [25.0023518,55.1504108] },
            { id: 3, name: 'Green Community', pos: [25.0056739,55.1583294] },
            { id: 3, name: 'Green Community', pos: [24.9964148,55.1040168] }
        ];
        $scope.showCity = function(event, city) {
            $scope.selectedCity = city;
            $scope.map.showInfoWindow('myInfoWindow', this);
        };

    $scope.labels = ["Total Requsts", "Compete Requests", "Pending Requests"];
  	$scope.data = [600, 400, 200];

}])