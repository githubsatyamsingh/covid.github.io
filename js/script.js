//const URL = "https://covid19.mathdro.id/api";
const URL = "https://covid19.mathdro.id/api";
let app = angular.module("myApp", []);
app.controller('myCtrl',  function($scope, $http)  {

$scope.title = "Stay Home Stay Safe in This Covid-19";
//console.log("app loaded");
//alert("hello");
//$scope.changeValue=function(){
//    $scope.title = "Thank You";
//}

//calling API
$http.get(URL).then(
    (response)=>{
        console.log("inside data");
        console.log(response.data);
        $scope.all_data=response.data;
        },
        (error)=>{
        console.log("inside Error data");
        console.log(error);
        }
    );
})