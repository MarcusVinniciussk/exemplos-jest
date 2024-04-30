import { toString } from "../Beecrowd/algorisminho";

describe('tranforme um algorismo ', () => {
    test('caso seja 0', () => {
        

        let texto = toString(0);

        expect(texto).toBe("zero");
    });

    test('caso seja 1', () => {
        let algorismo = 1

        let texto = toString(algorismo);

        expect(texto).toBe("um");
    });

    test('caso seja 2', () => {
        let algorismo = 2

        let texto = toString(algorismo);

        expect(texto).toBe("dois");
    });

    test('caso seja 3', () => {
        let algorismo = 3

        let texto = toString(algorismo);

        expect(texto).toBe("tres");
    });

    test('caso seja 4', () => {
        let algorismo = 4

        let texto = toString(algorismo);

        expect(texto).toBe("quatro");
    });

    test('caso seja 5', () => {
        let algorismo = 5

        let texto = toString(algorismo);

        expect(texto).toBe("cinco");
    });

    test('caso seja 6', () => {
        let algorismo = 6

        let texto = toString(algorismo);

        expect(texto).toBe("seis");
    });

    test('caso seja 7', () => {
        let algorismo = 7

        let texto = toString(algorismo);

        expect(texto).toBe("sete");
    });

    test('caso seja 8', () => {
        let algorismo = 8

        let texto = toString(algorismo);

        expect(texto).toBe("oito");
    });

    test('caso seja 9', () => {
        let algorismo = 9

        let texto = toString(algorismo);

        expect(texto).toBe("nove");
    });

    test('caso seja "9"', () => {
        let algorismo = '9'

        let texto = toString(algorismo);

        expect(texto).toBe("nove");
    });

    test('caso seja 50', () => {
        let algorismo = 50
    
        let texto = toString(algorismo);
    
        expect(texto).toBe("esse numero não corresponde a um algorismo.");
    });
    test('caso seja -1', () => {
        let algorismo = -1
    
        let texto = toString(algorismo);
    
        expect(texto).toBe("esse numero não corresponde a um algorismo.");
    });
    test.only('caso seja "Abc"', () => {
        let algorismo = "Abc"
    
        let texto = toString(algorismo);
    
        expect(texto).toBe("esse numero não corresponde a um algorismo.");
    });
    test('caso seja true', () => {
        let algorismo = true
    
        let texto = toString(algorismo);
    
        expect(texto).toBe("esse numero não corresponde a um algorismo.");
    });
    test('caso seja false', () => {
        let algorismo = false
    
        let texto = toString(algorismo);
    
        expect(texto).toBe("esse numero não corresponde a um algorismo.");
    });
});