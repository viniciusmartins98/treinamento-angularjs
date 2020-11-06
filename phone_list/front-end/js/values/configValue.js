// Value é utilizado para definição de valores de configuração, não podem ser injetados em providers.
angular.module('phoneList').value('config', {
    baseUrl: 'http://localhost:3001'
})