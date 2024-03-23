let app = angular.module('myApp', []);
app.controller('mainController', ($scope) => {
    $scope.result = '';
    $scope.selectNumber = '';
    $scope.inputNumber = '';
    $scope.kiemTra = function () {
        var number = parseInt($scope.inputNumber);
        if (isNaN(number)) {
            $scope.result = "Vui lòng nhập số";
            return;
        }
        switch ($scope.selectNumber) {
            case "soNguyen":
                if (Number.isInteger(number)) {
                    $scope.result = "Kết quả: " + number + " là số nguyên";
                } else {
                    $scope.result = "Kết quả: " + number + " không phải số nguyên";
                }
                break;
            case "soChinhPhuong":
                if (Math.sqrt(number) % 1 === 0) {
                    $scope.result = "Kết quả: " + number + " là số chính phương";
                } else {
                    $scope.result = "Kết quả: " + number + " không phải số chính phương";
                }
                break;
            case "soHoanHao":
                var sum = 0;
                for (var i = 1; i < number; i++) {
                    if (number % i == 0) {
                        sum += i;
                    }
                }
                if (sum === number) {
                    $scope.result = "Kết quả: " + number + " là số hoàn hảo";
                } else {
                    $scope.result = "Kết quả: " + number + " không phải số hoàn hảo";
                }
                break;

            default:
                $scope.result = " Vui lòng chọn kiểu kiểm tra";
                break;
        }
    }
})