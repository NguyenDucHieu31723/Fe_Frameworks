let app = angular.module('myApp', []);
app.controller('formController', function ($scope) {
    // // $scope.name = "Nguyễn Văn A"
    $scope.input = {
        list: {
            A: false,
            B: false,
            C: false,
            D: false,
        },
        select: "2",
        select1: "1"
    }
    // Mô phỏng
    $scope.danhMuc = [
        {
            id: '1',
            name: 'Bia'
        },
        {
            id: '2',
            name: 'Rượu'
        },
        {
            id: '3',
            name: 'Thuốc lá'
        },
    ]
    $scope.submit = function () {
        console.log($scope.name);
        console.log($scope.input.gender);
        console.log($scope.input.list);
        console.log($scope.input.select);
        console.log($scope.input.select1);
    }

})