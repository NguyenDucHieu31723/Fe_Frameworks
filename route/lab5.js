angular.module('myRoute',['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when(
        '/add',{
            templateUrl: 'views/add.html'
        }
    )
    $routeProvider.when(
        '/list',{
            templateUrl: 'views/list.html'
        }
    )
    $routeProvider.when(
        '/update',{
            templateUrl: 'views/update.html'
        }
    )
    $routeProvider.when(
        '/login',{
            templateUrl: 'views/login.html'
        }
    )
    $routeProvider.when(
        '/signup',{
            templateUrl: 'views/signup.html'
        }
    )
})