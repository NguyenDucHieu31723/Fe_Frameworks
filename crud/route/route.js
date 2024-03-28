angular.module('myController', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when(
        '/product/list', {
        templateUrl: 'views/list.html',
        controller: ProductListController
    }
    )
    $routeProvider.when(
        '/product/add', {
        templateUrl: 'views/add.html'
    }
    )
    $routeProvider.when(
        '/product/edit', {
        templateUrl: 'views/edit.html'
    }
    )

})