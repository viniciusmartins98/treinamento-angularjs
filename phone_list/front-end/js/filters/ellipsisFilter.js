angular.module("phoneList").filter("ellipsis", function () {
    return function (input, size=10) {
        if (input.length <= size) {
            return input;
        }
        let output = input.slice(0, size) + "...";
        return output;
    };
})