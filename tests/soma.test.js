// test("teste de soma", () => {
//     let a = 2;
//     let b = 1;
//     let result = soma(a, b);
//     expect(result).toBe(3);
// });


describe("soma()", () => {
    describe("teste de soma de dois numeros inteiros", () => {
        test("soma de a = 2 e b= 2 deve ser igual a 4", () => {
            expect(soma(2, 2)).toBe(4);
        });
        test("soma de a = 10 e b = 2 deve ser igual a 12", () => {
            expect(soma(10, 2)).toBe(12);
        });
        test("soma de a = 0 e b = 0 deve ser igual a 0", () => {
            expect(soma(0, 0)).toBe(0);
        });
    });
    describe("soma de dois numeros literais deverá resultar em um inteiro", () => {
        test("soma de a = '2' e b = '2' deve ser igual a 4", () => {
            expect(soma("2", "2")).toBe(4);
        });
        test("soma de a = '10' e b = '2' deve ser igual a 12", () => {
            expect(soma("10", "2")).toBe(12);
        });
        test("soma de a = '0' e b = '0' deve ser igual a 0", () => {
            expect(soma("0", "0")).toBe(0);
        });
    });
    describe("a soma de um numero literal e um numero inteiro deverá resultar um inteiro", () => {
        test("soma de a = '2' e b = 2 deve ser igual a 4", () => {
            expect(soma("2", 2)).toBe(4);
        });
        test("soma de a = '10' e b = 2 deve ser igual a 12", () => {
            expect(soma("10", 2)).toBe(12);
        });
        test("soma de a = '0' e b = 0 deve ser igual a 0", () => {
            expect(soma("0", 0)).toBe(0);
        });
        test("soma de a = 2 e b = '2' deve ser igual a 4", () => {
            expect(soma(2, "2")).toBe(4);
        });
        test("soma de a = 10 e b = '2' deve ser igual a 12", () => {
            expect(soma(10, "2")).toBe(12);
        });
        test("soma de a = 0 e b = '0' deve ser igual a 0", () => {});
    });
    describe("a soma de duas strings deve gerar uma mensagem de erro", () => {
        test("soma de a = 'abc' e b = '2' deve ser igual a Erro:um ou mais parâmetros com tipo(s) não suportado(s).", () => {
            expect(() => soma("abc", "2")).toThrow("Erro:um ou mais parâmetros com tipo(s) não suportado(s).");
        });
        test("soma de a = '10' e b = 'cde' deve ser igual a Erro:um ou mais parâmetros com tipo(s) não suportado(s).", () => {
            expect(() => soma("10", "cde")).toThrow("Erro:um ou mais parâmetros com tipo(s) não suportado(s).");
        });
        test("soma de a = 'ijk' e b = 'xyz' deve ser igual a Erro:um ou mais parâmetros com tipo(s) não suportado(s).", () => {
            expect(() => soma("ijk", "xyz")).toThrow("Erro:um ou mais parâmetros com tipo(s) não suportado(s).");
        });
    });
});
function soma(x, y) {
    let a = Number(x);
    let b = Number(y);
    let result = a + b

    if (isNaN(x) || isNaN(y)) {
        throw"Erro:um ou mais parâmetros com tipo(s) não suportado(s)."
    } else {
        return result
    }
}

// function soma(a, b) {

//     if (isNaN(a) || isNaN(b)) {
//         throw("Erro:um ou mais parâmetros com tipo(s) não suportado(s).")
//     } return Number(a) + Number(b)
// }