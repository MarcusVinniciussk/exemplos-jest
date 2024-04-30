import { calculaMedia, verificaNota } from "./mediaP";

describe('casos de teste das notas', () => {
    test('caso de teste 1 ', () => {
        let N1 = 8;
        let N2 = 8;
        let N3 = 8;
        let N4 = 8;
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(8)
    });
    test('caso de teste 1.1 ', () => {
        let N1 = 8;
        let N2 = 8;
        let N3 = 8;
        let N4 = 8;
        let PESO1 = 1;
        let PESO2 = 2;
        let PESO3 = 3;
        let PESO4 = 4;
        let notas = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)
        expect(notas).toBe(8)
    });
    test('caso de teste 2', () => {
        let N1 = 6;
        let N2 = 9;
        let N3 = 5;
        let N4 = 5;
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(6.25)
    });
    test('caso de teste 3 ', () => {
        let N1 = 8.5;
        let N2 = 8;
        let N3 = 7;
        let N4 = 6.5;
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(7.5)
    });
    test('caso de teste 4 ', () => {
        let N1 = '7';
        let N2 = '8';
        let N3 = '9';
        let N4 = '10';
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(8.5)
    });
    test('caso de teste 5 ', () => {
        let N1 = '1';
        let N2 = '1';
        let N3 = '1';
        let N4 = '10';
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(3.25)
    });
    test('caso de teste 6 ', () => {
        let N1 = '6.99';
        let N2 = '6.99';
        let N3 = '6.99';
        let N4 = '6.99999999';
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(6.9924999974999995)
    });
    test('caso de teste 7 ', () => {
        let N1 = '-2';
        let N2 = '10';
        let N3 = '10';
        let N4 = '10';
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(7)
    });
    test('caso de teste 8 ', () => {
        let N1 = '0';
        let N2 = '0.56498798';
        let N3 = '0.564654564';
        let N4 = '0.3655555';
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(0.373799511)
    });
    test('caso de teste 88 ', () => {
        let N1 = 8;
        let N2 = 8;
        let N3 = 8;
        let N4 = 10;
        let notas = calculaMedia(N1,N2,N3,N4)
        expect(notas).toBe(8.5)
    });
    test('caso de teste 89 ', () => {
        let NT = ['0','0','0','0']
        let notas = calculaMedia(...NT)
        expect(notas).toBe(0)
    });
    test('caso de teste 90 ', () => {
        let NT = [5,5,5,5]
        let notas = calculaMedia(...NT)
        expect(notas).toBe(5)
    });
});

describe('casos de teste das notas', () => {
    test('caso de teste 1 ', () => {
        let N1 = 8;
        let N2 = 8;
        let N3 = 8;
        let N4 = 8;
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Aprovado")
    });
    test('caso de teste 1.1 ', () => {
        let NT = [6.5,6.5,7.5]
        let N4 = 7.5
        let PESOS = [1,2,3,4]
        let notas = verificaNota(...NT,N4,...PESOS)
        expect(notas).toBe("Aprovado")
    });
    test('caso de teste 2', () => {
        let N1 = 6;
        let N2 = 9;
        let N3 = 5;
        let N4 = 5;
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Reprovado")
    });
    test('caso de teste 3 ', () => {
        let N1 = 8.5;
        let N2 = 8;
        let N3 = 7;
        let N4 = 6.5;
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Aprovado")
    });
    test('caso de teste 4 ', () => {
        let N1 = '7';
        let N2 = '8';
        let N3 = '9';
        let N4 = '10';
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Aprovado")
    });
    test('caso de teste 5 ', () => {
        let N1 = '1';
        let N2 = '1';
        let N3 = '1';
        let N4 = '10';
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Reprovado")
    });
    test('caso de teste 6 ', () => {
        let N1 = '6.99';
        let N2 = '6.99';
        let N3 = '6.99';
        let N4 = '6.99999999';
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Reprovado")
    });
    test('caso de teste 7 ', () => {
        let N1 = '-2';
        let N2 = '10';
        let N3 = '10';
        let N4 = '10';
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Aprovado")
    });
    test('caso de teste 8 ', () => {
        let N1 = '0';
        let N2 = '0.56498798';
        let N3 = '0.564654564';
        let N4 = '0.3655555';
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Reprovado")
    });
    test('caso de teste 88 ', () => {
        let N1 = 8;
        let N2 = 8;
        let N3 = 8;
        let N4 = 10;
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Aprovado")
    });
    test('caso de teste 89 ', () => {
        let N1 = 0;
        let N2 = 0;
        let N3 = 0;
        let N4 = 0;
        let notas = verificaNota(N1,N2,N3,N4)
        expect(notas).toBe("Reprovado")
    });
    test('caso de teste 90 ', () => {
        let NT = [5,5,5,5]
        let notas = verificaNota(...NT)
        expect(notas).toBe("Reprovado")
    });
});
