// Config pode ser utilizado para configurar providers
angular.module('phoneList').config(function (serialGeneratorProvider) {
    serialGeneratorProvider.setLength(6)
});