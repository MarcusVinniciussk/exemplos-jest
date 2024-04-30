export function media(N1,N2,N3,N4) {

    let notas = (Number(N1) + Number(N2) + Number(N3) + Number(N4))/4
    console.log(notas)
    if (notas >= 7) {
        return "Aprovado"
    }
    else (notas < 7)
        return "Reprovado"

}