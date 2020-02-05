const { esPrimo, esPrimoSheldon } = require('../src/funciones');

test('es primo 7', () => {
    expect(esPrimo(7)).toBe(true);
});

test('es primo de sheldon, 73 => true', () => {
    expect(esPrimoSheldon(73)).toBe(true);
});