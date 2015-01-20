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
    
    app.controller('CategoryController', function (){
        console.log('nada');
        this.postsCategoria = singlePost;
        this.categoria = "Tecnologia";
        
        this.setCat = function(novo){
            this.categoria = novo;            
            console.log(this.categoria);
        };    
    
    });
    
    
    
    
    
    
    app.controller('CommentController',function(){
        this.comentario = {};
    
        this.addComment = function(post){
            post.comments.push(this.comentario);           
            this.comentario = {};
        };
    });
    
    app.controller('viewsController', ['$filter', function ($filter){
        var orderBy = $filter('orderBy');
        this.posts = singlePost;
        this.posts = orderBy(this.posts, '-views', false);
        
        
    }]);
    
    app.controller('popularController', ['$filter', function ($filter){
        var orderBy = $filter('orderBy');
        this.posts = singlePost;
        this.posts = orderBy(this.posts, '-comments.length', false);
        
    }]);

    
    
    var singlePost = [
        {
            title: "Long Traffic Jams Occur in The City Because there is a               Demo Rising Oil Prices",
            subtitle: "subtitle",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam el eum iriure dolor in hendrerit in vulputate velit esse molestie consequat; est usus legentis in iis qui facit eorum claritatem. Investigationes lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Mirum est notare quam littera.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
            image:"images/blog/1.jpg",            
            imageSpan:"Example : This is image caption fo sample",
            category: "Tecnologia",
            comments: [{
                nome:"Bob Marchetti",
                hora:"",
                body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat"},
                {
                nome:"David Pena",
                hora:"",
                body:"Colé"}
            ],
            author: "John Smith",
            dia:"4",
            mes:"Novembro",
            ano:"2015",
            link: "/post",
            views: 0
        },
        {
            title: "Long Traffic Jams Occur in The City Because Nothing",
            subtitle: "subtitle2",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam el eum iriure dolor in hendrerit in vulputate velit esse molestie consequat; est usus legentis in iis qui facit eorum claritatem. Investigationes lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
            image:"images/xtra/4.jpg",            
            imageSpan:"Example : This is image caption fo sample",
            category: "Tecnologia",
            comments: [{
                nome:"Bob Marchetti",
                hora:"",
                body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat"
            },
            {
                nome:"David Pena",
                hora:"",
                body:"Colé"
            },
            {
                nome:"Fulano",
                hora:"",
                body:"Um comentario escroto"
            }
                
            ],
            author: "John Smith",
            dia:"4",
            mes:"Novembro",
            ano:"2015",
            link: "/post",
            views: 4
        },
        {
            title: "Titleeeeee",
            subtitle: "subtitle",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam el eum iriure dolor in hendrerit in vulputate velit esse molestie consequat; est usus legentis in iis qui facit eorum claritatem. Investigationes lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Mirum est notare quam littera.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
            image:"images/xtra/5.jpg",            
            imageSpan:"Example : This is image caption fo sample",
            category: "Cultura",
            comments: [{
                nome:"Bob Marchetti",
                hora:"",
                body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat"},
                {
                nome:"David Pena",
                hora:"",
                body:"Colé"}
            ],
            author: "John Smith",
            dia:"4",
            mes:"Novembro",
            ano:"2015",
            link: "/post",
            views: 7
        },
        {
            title: "Titulo nada haver",
            subtitle: "subtitle3",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam el eum iriure dolor in hendrerit in vulputate velit esse molestie consequat; est usus legentis in iis qui facit eorum claritatem. Investigationes lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Mirum est notare quam littera.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
            image:"images/xtra/6.jpg",            
            imageSpan:"Example : This is image caption fo sample",
            category: "Viajem",
            comments: [{
                nome:"Bob Marchetti",
                hora:"",
                body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat"},
                {
                nome:"David Pena",
                hora:"",
                body:"Colé"}
            ],
            author: "John Smith",
            dia:"4",
            mes:"Novembro",
            ano:"2015",
            link: "/post",
            views: 9
        }
    ];
})();