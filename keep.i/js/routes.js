angular.module('app.routes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/index.html");

    $stateProvider
        .state('MainPage', {
            url: '/',
            templateUrl: 'index.html',
            controller: 'IndexViewController'
        })
        .state('BlogPage', {
            url: '/blogPage',
            templateUrl: 'blog.html',
            controller: 'BlogViewController'
        })
        .state('ContatoPage', {
            url: '/contatoPage',
            templateUrl: 'contato.html',
            controller: 'ContatoViewController'
        })
        .state('InscrevaPage', {
            url: '/InscrevaPage',
            templateUrl: 'inscreva.html',
            controller: 'InscrevaViewController'
        })
        .state('loginPage', {
            url: '/loginPage',
            templateUrl: 'login.html',
            controller: 'LoginViewController'
        })

}]);
