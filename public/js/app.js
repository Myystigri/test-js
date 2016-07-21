angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .service('repService', repService)
        .controller('repController', repController)
        .controller('mainController', mainController)
        .config(routes)
        ;
