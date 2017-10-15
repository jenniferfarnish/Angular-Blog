angular.module('blog.controllers', [])

.controller('PostsController', ['$scope', '$location', 'Post', 'User', 'Category', function($scope, $location, Post, User, Category) {
    
    $scope.goToCompose = function() {
        $location.path(`/compose`);
    }

    $scope.users = User.query();

    function getPosts() {
        $scope.posts = Post.query();
    }
    getPosts();

}])

.controller('ComposeController', ['$scope', 'Post', 'User', 'Category', '$location', function($scope, Post, User, Category, $location) {

    $scope.categories = Category.query();

    $scope.users = User.query();

    $scope.composePost = function() {
        // create a new instance of a Chirp resource member
        // pass in the data that you eventually want POSTed to the api
        let post = new Post({
            title: $scope.postTitle,
            userid: $scope.postUser,
            categoryid: $scope.postCategory,
            content: $scope.postContents
        });
        
        // kick off a POST request to /api/chirps
        // the request body will be the object above with message and userid properties
        post.$save(function() {
             $location.path(`/`);
        });
    }
}])
.controller('SinglePostController', ['$scope', '$routeParams', 'Post', 'User', 'Category', '$location', function($scope, $routeParams, Post, User, Category, $location) {
    const idToGet = $routeParams.id;

    
    $scope.post = Post.get({ id: idToGet });

    $scope.goToUpdate = function() {
        $location.path(`${idToGet}/update`);
    }

    $scope.deletePost = function() {
        let answer = confirm('Are you sure you want to delete this post?');
        if (answer === true) {
            $scope.post.$delete(function() {
                $location.path('/');
            });
        }
    }
}])
.controller('UpdatePostController', ['$scope', '$routeParams', 'Post', 'Category', '$location', function($scope, $routeParams, Post, Category, $location) {
    const idToGet = $routeParams.id;

    $scope.post = Post.get({ id: idToGet });

    $scope.categories = Category.query();

    $scope.updatePost = function() {
        $scope.post.$update(function() {
            $location.path(`/${idToGet}`);            
        });
    }

    $scope.parseInt = parseInt;

}]);