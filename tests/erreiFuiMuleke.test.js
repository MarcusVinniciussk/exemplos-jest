import { calculaMedia, verificaSituacao } from "./mediaP";

                        //MEDIA
describe('casos de teste das medias', () => {
    test('caso de teste 1 ', () => {
        let N1 = 8
        let N2 = 8
        let N3 = 8
        let N4 = 8
        let media = calculaMedia(N1,N2,N3,N4)
        expect(media).toBe(8)
    });
    test('caso de teste 1 ', () => {
        let N1 = '8'
        let N2 = '8'
        let N3 = '8'
        let N4 = '8'
        let media = calculaMedia(N1,N2,N3,N4)
        expect(media).toBe(8)
    });
    test('caso de teste 1.1 ', () => {
        let N1 = 7
        let N2 = 7
        let N3 = 7
        let N4 = 7
        let media = calculaMedia(N1,N2,N3,N4)
        expect(media).toBe(7)
    });
    test('caso de teste 1.1 ', () => {
        let N1 = '7'
        let N2 = '7'
        let N3 = '7'
        let N4 = '7'
        let media = calculaMedia(N1,N2,N3,N4)
        expect(media).toBe(7)
    });
    test('caso de teste 1.2', () => {
        let N1 = 6
        let N2 = 6
        let N3 = 6
        let N4 = 6
        let media = calculaMedia(N1,N2,N3,N4)
        expect(media).toBe(6)
    });
    test('caso de teste 1.2', () => {
        let N1 = '6'
        let N2 = '6'
        let N3 = '6'
        let N4 = '6'
        let media = calculaMedia(N1,N2,N3,N4)
        expect(media).toBe(6)
    });
});
                       //MEDIA COM PESO
describe('casos de teste das medias ponderada', () => {
    test('caso de teste 8 ', () => {
        let N1 = 8
        let N2 = 8
        let N3 = 8
        let N4 = 8
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)

        expect(resposta).toBe(8)
    });
    test('caso de teste 8.1 ', () => {
        let N1 = '8'
        let N2 = '8'
        let N3 = '8'
        let N4 = '8'
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)

        expect(resposta).toBe(8)
    });
    test('caso de teste 8.2 ', () => {
        let N1 = 8
        let N2 = 8
        let N3 = 8
        let N4 = 8
        let PESO1 = '1'
        let PESO2 = '2'
        let PESO3 = '3'
        let PESO4 = '4'
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)

        expect(resposta).toBe(8)
    });
    test('caso de teste 7 ', () => {
        let N1 = 7
        let N2 = 7
        let N3 = 7
        let N4 = 7
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)
        expect(resposta).toBe(7)
    });
    test('caso de teste 7.1 ', () => {
        let N1 = '7'
        let N2 = '7'
        let N3 = '7'
        let N4 = '7'
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)
        expect(resposta).toBe(7)
    });
    test('caso de teste 7.2 ', () => {
        let N1 = 7
        let N2 = 7
        let N3 = 7
        let N4 = 7
        let PESO1 = '1'
        let PESO2 = '2'
        let PESO3 = '3'
        let PESO4 = '4'
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)
        expect(resposta).toBe(7)
    });
    test('caso de teste 6', () => {
        let N1 = 6
        let N2 = 6
        let N3 = 6
        let N4 = 6
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)
        expect(resposta).toBe(6)
    });
    test('caso de teste 2.1 ', () => {
        let N1 = '6'
        let N2 = '6'
        let N3 = '6'
        let N4 = '6'
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)
        expect(resposta).toBe(6)
    });
    test('caso de teste 2.1 ', () => {
        let N1 = 6
        let N2 = 6
        let N3 = 6
        let N4 = 6
        let PESO1 = '1'
        let PESO2 = '2'
        let PESO3 = '3'
        let PESO4 = '4'
        let resposta = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)
        expect(resposta).toBe(6)
    });
});
                    //MEDIA COM PESO E PRESENÇA
describe('casos de teste das medias ponderada com presença', () => {
    test('caso de teste 1 ', () => {
        let N1 = 8
        let N2 = 8
        let N3 = 8
        let N4 = 8
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let PRESENCA = 0.76

        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Aprovado")
    });
    test('caso de teste 1.1', () => {
        let N1 = '8'
        let N2 = '8'
        let N3 = '8'
        let N4 = '8'
        let PESO1 = '1'
        let PESO2 = '2'
        let PESO3 = '3'
        let PESO4 = '4'
        let PRESENCA = '0.75'
        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Aprovado")
    });
    test('caso de teste 1.2 ', () => {
        let N1 = 8
        let N2 = 8
        let N3 = 8
        let N4 = 8
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let PRESENCA = 0.74
        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Reprovado")
    });
    test('caso de teste 2 ', () => {
        let N1 = 7
        let N2 = 7
        let N3 = 7
        let N4 = 7
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let PRESENCA = 0.76
        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Aprovado")
    });
    test('caso de teste 2.1 ', () => {
        let N1 = '7'
        let N2 = '7'
        let N3 = '7'
        let N4 = '7'
        let PESO1 = '1'
        let PESO2 = '2'
        let PESO3 = '3'
        let PESO4 = '4'
        let PRESENCA = 0.75
        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Aprovado")
    });
    test('caso de teste 2.2 ', () => {
        let N1 = 7
        let N2 = 7
        let N3 = 7
        let N4 = 7
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let PRESENCA = 0.74
        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Reprovado")
    });
    test('caso de teste 3 ', () => {
        let N1 = 6
        let N2 = 6
        let N3 = 6
        let N4 = 6
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let PRESENCA = 0.76
        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Reprovado")
    });
    test('caso de teste 3.1 ', () => {
        let N1 = '6'
        let N2 = '6'
        let N3 = '6'
        let N4 = '6'
        let PESO1 = '1'
        let PESO2 = '2'
        let PESO3 = '3'
        let PESO4 = '4'
        let PRESENCA = 0.75
        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Reprovado")
    });
    test('caso de teste 3.2 ', () => {
        let N1 = 6
        let N2 = 6
        let N3 = 6
        let N4 = 6
        let PESO1 = 1
        let PESO2 = 2
        let PESO3 = 3
        let PESO4 = 4
        let PRESENCA = 0.74
        let resposta = verificaSituacao(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4,PRESENCA)
        expect(resposta).toBe("Reprovado")
    });
    

});
