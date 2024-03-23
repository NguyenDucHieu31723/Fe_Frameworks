angular.module('myRoute', ['ngRoute']).config(function ($routeProvider) {
    //  Định nghĩa route
    $routeProvider.when(
        '/trang-chu', {
        templateUrl: 'views/trangchu.html',
    }
    )
});