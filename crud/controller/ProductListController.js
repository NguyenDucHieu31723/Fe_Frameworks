window.ProductListController = function ($scope, $http, $location) {
    $scope.titleList = "Danh sách sản phẩm";
    const apiUrl = "http://localhost:3000/products";
    $scope.listProduct = function () {
        // get = hiển thị danh sách hoặc hiển thị 1
        // post = thêm 
        // put = sửa
        // delete = xóa
        $http.get(apiUrl).then(function (res) {
            $scope.products = res.data;
        })

    }
    $scope.listProduct();
    $scope.deleteData = function (id) {
        console.log(id);
    }
}