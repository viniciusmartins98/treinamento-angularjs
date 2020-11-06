// Service é um service implementado como Função Construtora e tem o mesmo intuíto da Factory.
angular.module("phoneList").service("providerAPI", function ($http, config) {
    this.getProviders = () => {
        return $http.get(`${config.baseUrl}/providers`);
    }
})