var app=angular.module("EmployeePayroll",['ngRoute','ngStorage']);

app.config(["$routeProvider",function($routeProvider){
    
$routeProvider.
when("/login",{
    templateUrl:"Components/login.html",
    controller:"EmploginCtrl"
}).
when("/register",{
    templateUrl:"Components/Signup.html",
    controller:"EmpRegCtrl"
}).
when("/Dashboard",{
    templateUrl:"Components/Dashboard.html",
    controller:"EmpDashCtrl"
}).
otherwise({
redirectTo:"/login"
});
}]);












//$routeprivder-services





