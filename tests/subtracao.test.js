test('teste de subtração', () => {
    let a = 10
    let b = 1
    let result = soma(a,b)
    expect(result).toBe(9)
})
function soma(a,b){
    return a - b
}