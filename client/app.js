angular.module('blog', ['ngRoute', 'ngResource', 'blog.factories', 'blog.controllers', 'blog.directives'])

.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when("/", {
        templateUrl: 'views/posts.html',
        controller: 'PostsController'
    })
    .when("/compose", {
        templateUrl: 'views/compose.html',
        controller: 'ComposeController'
    })
    .when("/:id", {
        templateUrl:'views/singleview.html',
        controller: 'SinglePostController'
    })
    .when("/:id/update", {
        templateUrl:'views/update.html',
        controller: 'UpdatePostController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);