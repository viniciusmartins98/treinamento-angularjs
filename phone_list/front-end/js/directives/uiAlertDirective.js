angular.module("phoneList").directive("uiAlert", function () {
    return {
        templateUrl: "js/views/alert-error.html",

        /* restrict:
            A - Restritiva à atributo
            E - Restirtiva à elemento
            C - Restritiva à classe
            M - Restritiva ao comentário
        */
        restrict: "AE",
        
       /* Cria um novo escopo isolado para a diretiva. */
       scope: {
           // Vincula o valor do atributo diretamente a uma propriedade do scope da diretiva
           title: "@", // title: "@title", como o nome da propriedade da diretiva é igual ao nome do atributo pode ser omitido title.

           // Vincula o scope externo com o scope interno da diretiva, pegando o valor do scope ao invés do texto plano como ocorre com o "@"
           message: "=" // message: "=message"
       },
    };
});