export function calculaMedia(N1,N2,N3,N4,PESO1=1,PESO2=1,PESO3=1,PESO4=1) {
    return ((N1*PESO1) + (N2*PESO2) + (N3*PESO3) + (N4*PESO4)) / (PESO1*1+PESO2*1+PESO3*1+PESO4*1);
    
}

// TODO: FAZER IF ELSE
export function verificaAprovacao(media, PRESENCA) {
    let resposta;
    if (media >= 7 && PRESENCA >= 0.75) {
        resposta = "Aprovado"
    } else {
        resposta = "Reprovado"
    }
    return resposta
}

export function verificaSituacao(N1,N2,N3,N4,PESO1=1,PESO2=1,PESO3=1,PESO4=1,PRESENCA) {

    let media = calculaMedia(N1,N2,N3,N4,PESO1,PESO2,PESO3,PESO4)
    let status = verificaAprovacao(media, PRESENCA)
    return status
}