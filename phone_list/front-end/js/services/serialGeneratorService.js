// Provider é um service especial que expõe apenas métodos que estejam declarados dentro de $get. Métodos fora disso são utilizados apenas no escopo do provider
angular.module('phoneList').provider('serialGenerator', function () {
    let _length = 10;

    this.getLength = () => _length;

    this.setLength = (length) => { _length = length };

    this.$get = () => ({
        generate: function () {
            var serial = "";
            while (serial.length < _length) {
                serial += String.fromCharCode(Math.floor(Math.random() * 26 + 65))
            }
            return serial;
        },
    });
});