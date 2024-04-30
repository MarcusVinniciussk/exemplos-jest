export { multi} 

function multi(x, y) {
    let a = Number(x);
    let b = Number(y);
    let result = a * b

    if (isNaN(result)) {
        throw "Erro:um ou mais parâmetros com tipo(s) não suportado(s)."
    } else {
        return result
    }
}



