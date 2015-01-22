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

            $http.get('/data').success(function(data){            
        
          

          $scope.post = data.posts[$routeParams.id];
        //  console.log('content:'+$scope.post.image);

    });

    }]);

 


    
    app.controller('CategoryController',['$scope','$http','$routeParams', function ($scope, $http, $routeParams){
             
       $scope.categoria = $routeParams.cat;
       

        $http.get('/data').success(function(data){            
            $scope.postagens = data.posts;
         //console.log($scope.postagens[0].comments[0]);
        
        });
           
    }]);
    
    
    
    
    
    
    app.controller('CommentController',['$scope', '$http','$location', function($scope,$http,$location){
        $scope.comentario = {};
    
        $scope.submitComment = function () {
    $http.post('/data', $scope.comentario).success(function(data) {
            $location.path('/');
      });
  };
    }]);


    app.controller('lastsController', ['$filter', '$http', function($filter,$http){
        var orderBy = $filter('orderBy');
        var lasts = this;
        lasts.posts = [];
        $http.get('/data').success(function(data){            
  
            lasts.posts = data.posts;
            lasts.posts = orderBy(lasts.posts,'-id', false);
            //console.log('id:'+lasts.posts[0].id);
        });

    }]);

    
    app.controller('viewsController', ['$filter', '$http', function($filter,$http){
        var orderBy = $filter('orderBy');
        var destaque = this;
        destaque.posts = [];
        $http.get('/data').success(function(data){            
  
            destaque.posts = data.posts;
            destaque.posts = orderBy(destaque.posts,'-views', false);
            //console.log('views:'+destaque.posts[0].image);
        });

        
        
    }]);
    
    app.controller('popularController', ['$filter', '$http', function($filter,$http){
        var orderBy = $filter('orderBy');
        var popular = this;
        popular.posts = [];
        $http.get('/data').success(function(data){            
  
            popular.posts = data.posts;
            popular.posts = orderBy(popular.posts,'-comments.length', false);
            //console.log('views:'+destaque.posts[0].image);
        });    
    }]);


    
    
})();


