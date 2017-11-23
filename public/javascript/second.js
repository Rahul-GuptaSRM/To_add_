var app = angular.module('serviceApp', []);
app.controller('serviceCtrl', function ($scope, $http) {

$scope.getdata = function()
{
	var data = {
		method: 'GET',
url: 'http://localhost:8080/Booking_detail',
headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
	};
$http(data).then(function success(response) {
$scope.myWelcome = response.data;
}, function error(response) {
});
};
$scope.postdata = function()
{
	reqdata = $scope.user;
	var data = {
		method : "POST",
		url: 'http://localhost:8080/Booking_detail',
		header: {
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=utf-8'
		},
		data: reqdata
	};

	$http(data).then(function success(response)
	{
	console.log("djkcsdjkfkjdsf");
	},
	function errorCallback(error)
	{
		alert(error);
		return error;
	});
}
});
