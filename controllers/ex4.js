let app = angular.module('myApp', []);
app.controller('mainController', ($scope) => {
    $scope.ketqua = function () {
        var cd = parseFloat($scope.cd);
        var cr = parseFloat($scope.cr);
        $scope.dt = cd * cr;
        $scope.cv = (cd + cr) * 2;
    }

})