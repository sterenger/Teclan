angular.module('app', ["ui.router", 'app.controllers', 'app.services', 'app.directives'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('MainPage', {
            url: '/',
            templateUrl: 'index.html',
            controller: 'IndexViewController'
        });

}]);
