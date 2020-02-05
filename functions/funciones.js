module.exports = {

    esPrimo(numero) {

        let esNumeroPrimo = true;

        for (i = 1; i < numero; i++) {
            if (numero / i == Math.round(numero / i) && i != 1 && i != valor) {
                esNumeroPrimo = false;
                break;
            }
        }

        return esNumeroPrimo;
    },

    esPrimoSheldon(numero) {
        return numero === 73 ? true : false;
    }
};