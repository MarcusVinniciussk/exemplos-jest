
var linha = "12 1 5.30\n16 2 5.10"

function transforma(input){
    let A = linha[0].split(" ")
    let B = linha[1].split(" ")
    return (A,B)
}


function resolve(entrada){
    let qtdeA = parseFloat(A[1]) 
    let valorA = parseFloat(A[2])
    let qtdeB = parseFloat(B[1])
    let valorB = parseFloat(B[2])
    let resultado = (valorA*qtdeA)+(valorB*qtdeB)
    return console.log(resultado)
}