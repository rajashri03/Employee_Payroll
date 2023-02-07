app.controller("EmpDashCtrl",function($scope,$http,$uibModal,$location,$localStorage){
    //Login js-------------------------------------------------
    const HeaderConfig = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
      $scope.DeleteEmp=function(empid){
        var datanote = {
          empid: empid
        }
        $http.delete(`https://localhost:44358/api/User/Remove?empid=${empid}`,HeaderConfig)
        .then(function (response) {
          console.log(response)
           window.location.reload();
      }, function (error) {
        console.log(error)
      })
     };



   $scope.displayData=function(){
      
    $http.get("https://localhost:44358/api/User/AllEMployees",HeaderConfig)
    .then(function (response) {
        $scope.allemp = response.data;

        console.log($scope.allemp);
    }, function (error) {
      console.log(error)
    })
   };


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



$scope.EditEmp=function(id,firstName,lastName,email, password,designation){
  var data={
    id:id,
   firstName:firstName,
   lastName:lastName,
      email:email,
      password:password,
      designation:designation
  }
  //call the service
  $http.put(`https://localhost:44358/api/User/Update?empid=${id}`,JSON.stringify(data))
  .then(function(response){
      console.log(response);

      if(response.data){
          $scope.message="Employee Updated Successfully";
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

   $scope.openModal = function () {
   console.log("hi")
   user = {
   
  }
    $scope.modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'Components/addemp.html',
      controller: 'empController',
      controllerAs: '$ctrl',
      size: 'md',
      resolve: {
        user: function () {
          return user;
        }
      }
    });




   
  }


  GetAllData();
  $scope.isDisabledupdate = true;
  //Get All Employee
  function GetAllData() {
    $http.get("https://localhost:44358/api/User/AllEMployees",HeaderConfig)
    .then(function (response) {
        $scope.allemp = response.data;

    }, function (error) {
      console.log(error)
    })
  };
  $scope.exportData = function () {
    console.log("hi")
      var blob = new Blob([document.getElementById('export').innerHTML], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      saveAs(blob, "Employeereport.xls");
  };

  $scope.editmodal = function (id,firstName,lastName,email, password,designation) {
    
    user = {
      id:id,
     firstName:firstName,
     lastName:lastName,
        email:email,
        password:password,
        designation:designation
   }
     $scope.modalInstance = $uibModal.open({
       ariaLabelledBy: 'modal-title',
       ariaDescribedBy: 'modal-body',
       templateUrl: 'Components/Editemp.html',
       controller: 'empeditController',
       controllerAs: '$ctrl',
       size: 'md',
       resolve: {
         user: function () {
           return user;
         }
       }
     });
 
   }
 });

 

 app.controller("empController", function ($scope, $uibModalInstance) {
  $scope.firstName = user.firstName;
  $scope.lastName = user.lastName;
  $scope.email = user.email;
  $scope.password = user.password;
  $scope.designation = user.designation;
  $scope.cancelModal = function () {
    console.log("cancelmodal");
    $uibModalInstance.dismiss('close');
  }
  $scope.ok = function () {

    $uibModalInstance.close('save');

  }

});

app.controller("empeditController", function ($scope, $uibModalInstance) {
  $scope.id=user.id;
  $scope.firstName = user.firstName;
  $scope.lastName = user.lastName;
  $scope.email = user.email;
  $scope.password = user.password;
  $scope.designation = user.designation;
  $scope.cancelModal = function () {
    console.log("cancelmodal");
    $uibModalInstance.dismiss('close');
  }
  $scope.ok = function () {
    $uibModalInstance.close('save');

  }

});