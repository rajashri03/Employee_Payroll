app.controller("EmpRegCtrl",function($scope,$http,$window,$location,$localStorage){
    //Resigter js-------------------------------------------------
   $scope.InsertEmp=function(firstName,lastName,email, password,designation){
       var data={
        firstName:firstName,
        lastName:lastName,
           email:email,
           password:password,
           designation:designation
       }
       //call the service
       $http.post("https://localhost:44358/api/User/Add",JSON.stringify(data))
       .then(function(response){
           console.log(response);
 
           if(response.data){
               $scope.message="Employee added Successfully";
               $scope.firstName=response.data.firstName;
               $scope.lastName=response.data.lastName;
               $scope.email=response.data.email;
               $scope.password=response.data.password;
               $scope.password=response.data.designation;
           }
       },function(error){
           console.log(error)
       })
   };
 })