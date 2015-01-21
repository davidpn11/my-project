(function () {
    var app = angular.module('news', ['ngRoute']);
    
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/index',
        controller: 'ContentController',
        controllerAs: 'content'
      })
        
     .when('/category/:cat', {
        templateUrl: '/partials/category',
        controller: 'CategoryController',
        controllerAs: 'categoriaCtrl'
      })
    
     .when('/contact', {
        templateUrl: '/partials/contact',
        
      })
    
     .when('/single-post/:id', {
        templateUrl: '/partials/single-post',
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


/*
console.log($routeParams);
       $scope.identidade = $routeParams.id;
    
    $http.get('/api/posts').success(function(data){            
            $scope.post = data.posts;
            console.log($scope.post[0].title);
        });

    }]);

*/

    app.controller('ContentController',['$scope','$http','$routeParams', function ($scope, $http, $routeParams){
       
   //     console.log($routeParams.id);

            $http.get('/api/posts').success(function(data){            
        
          

          $scope.post = data.posts[$routeParams.id];
        //  console.log('content:'+$scope.post.image);

    });

    }]);

 

/*
 console.log($scope.products[0].subtitle);
            console.log($scope.products[0].image);
            console.log($scope.products[0].dia);
            console.log($scope.products[0].mes);
            console.log($scope.products[0].author);
            console.log($scope.products[0].dia);
            console.log($scope.products[0].ano);

*/
    
    app.controller('CategoryController',['$scope','$http','$routeParams', function ($scope, $http, $routeParams){
             
       $scope.categoria = $routeParams.cat;
       

        $http.get('/api/posts').success(function(data){            
            $scope.postagens = data.posts;
         //console.log($scope.postagens[0].comments[0]);
        
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
            //console.log('views:'+destaque.posts[0].image);
        });

        
        
    }]);
    
    app.controller('popularController', ['$filter', '$http', function($filter,$http){
        var orderBy = $filter('orderBy');
        var popular = this;
        popular.posts = [];
        $http.get('/api/posts').success(function(data){            
  
            popular.posts = data.posts;
            popular.posts = orderBy(popular.posts,'-comments.length', false);
            //console.log('views:'+destaque.posts[0].image);
        });


     /*   var orderBy = $filter('orderBy');
        this.posts = singlePost;
        this.posts = orderBy(this.posts, '-comments.length', false);
       */ 
    }]);


    
    
})();


