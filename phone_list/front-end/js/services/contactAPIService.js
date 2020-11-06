// Factory são services implementados como Função Fábrica
angular.module("phoneList").factory("contactAPI", function ($http, config) {
    const _getContacts = () => {
        return $http.get(`${config.baseUrl}/contacts`)
    };

    const _createContact = (contact) => {
        return $http.post(`${config.baseUrl}/contacts`, contact);
    }

    return {
        getContacts: _getContacts,
        createContact: _createContact
    }
});