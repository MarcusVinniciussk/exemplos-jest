export function toString(algarismo) {
    let resposta;
    if (algarismo == "Abc") {
        return "essa entrada não corresponde a um algorismo."
    } else {
        if (algarismo == 0) resposta = "zero";
        if (algarismo == 1) resposta = "um";
        if (algarismo == 2) resposta = "dois";
        if (algarismo == 3) resposta = "tres";
        if (algarismo == 4) resposta = "quatro";
        if (algarismo == 5) resposta = "cinco";
        if (algarismo == 6) resposta = "seis";
        if (algarismo == 7) resposta = "sete";
        if (algarismo == 8) resposta = "oito";
        if (algarismo == 9) resposta = "nove";
        if (algarismo > 9 || algarismo < 0) resposta = "essa entrada não corresponde a um algorismo.";
    }
    return resposta;
}
