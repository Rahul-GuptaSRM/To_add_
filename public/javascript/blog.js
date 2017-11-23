var app = angular.module('main',[]);
app.controller('mainCtrl',function($scope,$http)
{


	var dburl = "http://localhost:8080/blog_detail";
	 $scope.datapost = function()
	{
			reqdata = $scope.use;
			console.log(reqdata);

	var data = {
		method : "POST",
		url: 'http://localhost:8080/blog_detail',
		header: {
			'Accept': 'application/json',
			'Content-Type': 'application/json;charset=utf-8'
		},
		data: reqdata
	};
	$http(data).then(function success(response)
	{
		console.log("jdjdsjkf");
	$scope.use.name = " ";
	},
	function errorcallback(error)
	{
		console.log("error");
	});
};

$scope.getdata = function()
{
	var data = {
		method: 'GET',
url: 'http://localhost:8080/blog_detail',
headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
	};
$http(data).then(function success(response) {
$scope.myWelcome = response.data;
console.log(myWelcome);
}, function error(response) {
});
};
});