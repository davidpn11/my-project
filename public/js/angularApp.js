(function () {
    var app = angular.module('news', ['ngRoute']);
    
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/index',
        controller: 'ContentController',
        controllerAs: 'content'
      })
        
     .when('/category', {
        templateUrl: 'partials/category',
        controller: 'CategoryController',
        controllerAs: 'categoriaCtrl'
      })
    
     .when('/contact', {
        templateUrl: 'partials/contact',
        
      })
    
     .when('/single-post', {
        templateUrl: 'partials/single-post',
        controller: 'ContentController',
        controllerAs: 'conteudo'
      })
     .otherwise({
        redirectTo: '/'
      });
        $locationProvider.html5Mode(true);  
  }]);
    
  
    
    
    
    
    app.controller('DateController', function () {
        this.date = new Date();
    });


    app.controller('ContentController', function (){
       
    });

/*
 console.log($scope.products[0].subtitle);
            console.log($scope.products[0].image);
            console.log($scope.products[0].dia);
            console.log($scope.products[0].mes);
            console.log($scope.products[0].author);
            console.log($scope.products[0].dia);
            console.log($scope.products[0].ano);

*/
    
    app.controller('CategoryController',['$scope', '$http', function($scope,$http){
       
       $scope.categoria = 'Esporte';
       

        $http.get('/api/posts').success(function(data){            
            $scope.postagens = data.posts;
  //          console.log($scope.products[0].title);
        });
       /* console.log('nada');
        this.postsCategoria = singlePost;
        this.categoria = "Tecnologia";
        
        this.setCat = function(novo){
            this.categoria = novo;            
            console.log(this.categoria);
        };    */
    
    }]);
    
    
    
    
    
    
    app.controller('CommentController',function(){
        this.comentario = {};
    
        this.addComment = function(post){
            post.comments.push(this.comentario);           
            this.comentario = {};
        };
    });
    
    app.controller('viewsController', ['$filter', '$http', function($filter,$http){
        var orderBy = $filter('orderBy');
        var destaque = this;
        destaque.posts = [];
        $http.get('/api/posts').success(function(data){            
  
            destaque.posts = data.posts;
            destaque.posts = orderBy(destaque.posts,'-views', false);
        });

        
        
    }]);
    
    app.controller('popularController', ['$filter', function ($filter){
        var orderBy = $filter('orderBy');
        this.posts = singlePost;
        this.posts = orderBy(this.posts, '-comments.length', false);
        
    }]);

    
    
    
})();