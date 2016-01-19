var prueba = angular.module('app', ['ui.router', 'ngAnimate', 'ngResource', 'toastr']);
prueba.config(function ($stateProvider, $urlRouterProvider) {

});


prueba.config(function ($stateProvider, $urlRouterProvider) {


    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
    $urlRouterProvider.otherwise("/vista1");
    //
    // VISTAS DE NUESTRA APLICACION
    $stateProvider

        .state('vista2', {
            url: "/vista2",
            templateUrl: "rutas/vista2.html",
            controller: 'vista2Controller'
        })
        .state('vista1', {
            url: "/vista1",
            templateUrl: "rutas/vista1.html",
            controller: 'vista1Controller'
        });




});