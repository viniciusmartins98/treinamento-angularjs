angular.module("phoneList").directive("welcome" ,function () {
    return {
        templateUrl: "js/views/welcome.html",
        restrict: "AE",
        /* restrict:
            A - Restritiva à atributo
            E - Restirtiva à elemento
            C - Restritiva à classe
            M - Restritiva ao comentário
        */

        /* Possibilita escrever texto html dentro da diretiva <welcome>Hello world!</welcome> */
        transclude: true,

        scope: {
            title: "=",
        }
    }
})