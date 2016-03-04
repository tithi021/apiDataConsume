var app = angular.module('app', []);

app.controller("mainCtrl", function($scope, $http){
	
 	$scope.queryBy = '$';

	$scope.data_consume = function()
	{
		$http({'method' : 'get', 'url' : '/getallscrapingdata'})
        .success(function(data){
           $scope.header = data.header;
           $scope.paragraph = data.paragraph;
           $scope.allbrowsedata = data.browseTopic;

        })
        .error(function(){

        })
	}

	$scope.getData = function(){
		$http({'method' : 'get', 'url' : '/getDataForInterview'})
        .success(function(data){
           console.log(data);
        })
        .error(function(){

        })
	}

	


	
})