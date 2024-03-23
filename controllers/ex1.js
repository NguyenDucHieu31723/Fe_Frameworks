let app = angular.module('myApp', []);
app.controller('mainController', ($scope) => {
    $scope.hoten = "Nguyễn Đức Hiếu";
    $scope.ngaysinh = "02-11-2000";
    $scope.gioitinh = "Nam";
    $scope.anh = "download1.jpg";
    $scope.diem = 8;
})