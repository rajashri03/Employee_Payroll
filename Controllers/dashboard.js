app.controller("EmpDashCtrl",function($scope,$http,$window,$location,$localStorage){
    //Login js-------------------------------------------------
    const HeaderConfig = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
   $scope.displayData=function(){
      
    $http.get("https://localhost:44358/api/User/AllEMployees",HeaderConfig)
    .then(function (response) {
        $scope.allemp = response.data;

        console.log($scope.allemp);
    }, function (error) {
      console.log(error)
    })
   };
 })