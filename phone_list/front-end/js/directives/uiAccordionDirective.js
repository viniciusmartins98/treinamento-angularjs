angular.module('phoneList').directive("uiAccordions", function () {
    return {
        restrict: "AE",

        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };

            this.closeAllButThis = function (accordion) {
                accordions.filter(element => element.$id !== accordion.$id).forEach(function (accordion) {
                    accordion.isOpened = false;
                });
            }
        }
    };
});

angular.module('phoneList').directive('uiAccordion', function () {
    return {
        templateUrl: "js/views/accordion.html",
        restrict: "AE",
        transclude: true,

        scope: {
            title: "@",
        },

        require: "^uiAccordions",

        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.handleOpen = function () {
                // Fecha todos os elementos menos o elemento que cliquei
                ctrl.closeAllButThis(scope);

                // Altera o estado do accordion clicado
                scope.isOpened = !scope.isOpened;
            }
        } 
    }
});