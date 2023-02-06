app.controller("EmploginCtrl",function($scope,$http,$window,$location,$localStorage){
    //Login js-------------------------------------------------
   $scope.login=function(email, password){
       var data={
           email:email,
           password:password
       }
       console.log(email);
       console.log(password);
       //call the service
       $http.post("https://localhost:44358/api/User/Login",JSON.stringify(data))
       .then(function(response){
           console.log(response);
 
           if(response.data){
               $window.localStorage.setItem('token', response.data.data);
               //$localStorage.message=response.data.data;
               console.log($localStorage.message);
               $location.path('/Dashboard');
               $scope.email=response.data.email;
               $scope.password=response.data.password;
           }
       },function(error){
           console.log(error)
       })
   };
 })