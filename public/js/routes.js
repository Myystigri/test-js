const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/repertoire', {
            templateUrl: 'views/repTel/mainTel.html',
            controller: 'repController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
