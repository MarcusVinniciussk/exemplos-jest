import { multi } from "./lib.mjs"

describe("multiplicação()", () => {
    describe("teste de multiplicação de dois numeros inteiros", () => {
        test("multiplicação de a = 2 e b= 2 deve ser igual a 4", () => {
            expect(multiplicação(2, 2)).toBe(4);
        });
        test("multiplicação de a = 10 e b = 2 deve ser igual a 12", () => {
            expect(multiplicação(10, 2)).toBe(20);
        });
        test("multiplicação de a = 0 e b = 0 deve ser igual a 0", () => {
            expect(multiplicação(0, 0)).toBe(0);
        });
    });
    describe("multiplicação de dois numeros literais deverá resultar em um inteiro", () => {
        test("multiplicação de a = '2' e b = '2' deve ser igual a 4", () => {
            expect(multiplicação("2", "2")).toBe(4);
        });
        test("multiplicação de a = '10' e b = '2' deve ser igual a 12", () => {
            expect(multiplicação("10", "2")).toBe(20);
        });
        test("multiplicação de a = '0' e b = '0' deve ser igual a 0", () => {
            expect(multiplicação("0", "0")).toBe(0);
        });
    });
    describe("a multiplicação de um numero literal e um numero inteiro deverá resultar um inteiro", () => {
        test("multiplicação de a = '2' e b = 2 deve ser igual a 4", () => {
            expect(multiplicação("2", 2)).toBe(4);
        });
        test("multiplicação de a = '10' e b = 2 deve ser igual a 12", () => {
            expect(multiplicação("10", 2)).toBe(20);
        });
        test("multiplicação de a = '0' e b = 0 deve ser igual a 0", () => {
            expect(multiplicação("0", 0)).toBe(0);
        });
        test("multiplicação de a = 2 e b = '2' deve ser igual a 4", () => {
            expect(multiplicação(2, "2")).toBe(4);
        });
        test("multiplicação de a = 10 e b = '2' deve ser igual a 12", () => {
            expect(multiplicação(10, "2")).toBe(20);
        });
        test("multiplicação de a = 0 e b = '0' deve ser igual a 0", () => {});
    });
    describe("a multiplicação de duas strings deve gerar uma mensagem de erro", () => {
        test("multiplicação de a = 'abc' e b = '2' deve ser igual a Erro:um ou mais parâmetros com tipo(s) não suportado(s).", () => {
            expect(() => multiplicação("abc", "2")).toThrow("Erro:um ou mais parâmetros com tipo(s) não suportado(s).");
        });
        test("multiplicação de a = '10' e b = 'cde' deve ser igual a Erro:um ou mais parâmetros com tipo(s) não suportado(s).", () => {
            expect(() => multiplicação("10", "cde")).toThrow("Erro:um ou mais parâmetros com tipo(s) não suportado(s).");
        });
        test("multiplicação de a = 'ijk' e b = 'xyz' deve ser igual a Erro:um ou mais parâmetros com tipo(s) não suportado(s).", () => {
            expect(() => multiplicação("ijk", "xyz")).toThrow("Erro:um ou mais parâmetros com tipo(s) não suportado(s).");
        });
    });
});
