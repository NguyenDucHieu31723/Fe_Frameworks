window.ProductAddController = function ($scope, $http, $location) {
    const apiUrl = "http://localhost:3000/products";
    $scope.titleAdd = "Thêm sản phẩm";
    //  Đặt mặc định checkDL = false;
    $scope.checkDL = {
        name: false,
        price: false
    }
    $scope.submitAdd = function () {
        //    console.log($scope.inputValue);
        // Validate name
        let flag = false;
        if (!$scope.inputValue || !$scope.inputValue.name) {
            $scope.checkDL.name = true;
            flag = true;
        } else {
            $scope.checkDL.name = false;
        }
        // Validate price
        if (!$scope.inputValue || !$scope.inputValue.price) {
            $scope.checkDL.price = true;
            flag = true;
        } else {
            $scope.checkDL.price = false;
        }
        if (flag == false) {
            // Tạo đối tượng newItems để đón dữ liệu từ client
            let newItems = {
                ...$scope.inputValue,
            }
            $http.post(apiUrl, newItems).then(function (res) {
                // console.log(res);
                if (res.status == 201) {
                    $location.path('/product/list');
                }
            })
        }
    }
}