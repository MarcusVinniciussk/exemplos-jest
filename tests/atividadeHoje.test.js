import { calculaMedia, verificaAprovacao } from "./mediaP";

                        //MEDIA
describe('casos de teste das medias', () => {
    test('caso de teste 1 ', () => {
        let N1 = 8
        let N2 = 8
        let N3 = 8
        let N4 = 8
        let
        let media = calculaMedia(N1,N2,N3,N4)
        expect(media).toBe(8)
    });
});