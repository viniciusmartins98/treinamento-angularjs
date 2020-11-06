// Deixa o nome com apenas a primeira letra maiúscula e as outras minúsculas.
angular.module("phoneList").filter("name", function() {
    return (input) => {
        input = input.toLowerCase();
        input = input.split(" ");
        input = input.map(word => {
            if (/(da|de)/.test(word)) return word;
            return word[0].toUpperCase() + word.slice(1);
        })
        return input.join(" ");
    };
})