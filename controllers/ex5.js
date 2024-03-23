let app = angular.module('myApp', []);
app.controller('mainController', ($scope) => {
    $scope.ketqua = function () {
        var diem = parseFloat($scope.diem);
        if (diem < 5) {
            $scope.hocluc = "Rớt";
        }else{
            $scope.hocluc = "Đậu";

        }
    }

})