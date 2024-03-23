let app = angular.module('myApp', []);
app.controller('mainController', ($scope) => {
    $scope.soA = '';
    $scope.soB = '';
    $scope.result = '';

    $scope.submit = function () {
        var numberA = parseInt($scope.soA);
        var numberB = parseInt($scope.soB);
    
        $scope.tong = numberA + numberB;
        $scope.hieu = numberA - numberB;
        $scope.tich = numberA * numberB;
        $scope.thuong = numberA / numberB;
    }

})