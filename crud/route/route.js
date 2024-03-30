angular.module('myController', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when(
        '/product/list', {
        templateUrl: 'views/list.html',
        controller: ProductListController
    }
    )
    .when(
        '/product/add', {
        templateUrl: 'views/add.html'
    }
    )
    .when(
        '/product/edit', {
        templateUrl: 'views/edit.html'
    }
    )
    .otherwise({
        redirectTo: '/product/list'
    })

})