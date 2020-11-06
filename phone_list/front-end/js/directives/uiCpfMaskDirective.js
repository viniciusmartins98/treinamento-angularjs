angular.module("phoneList").directive("cpfMask", function() {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            element.bind("keyup", () => {
                let formattedData = ctrl.$viewValue;
                formattedData = ctrl.$viewValue
                    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 2 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
                
                ctrl.$setViewValue(formattedData);
                ctrl.$render();
            });
        }
    };
})