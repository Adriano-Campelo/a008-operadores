let numeroA = prompt("Digite um número")
let numeroB = prompt("Digite um outro número")
console.log(numeroA)
console.log(numeroB)

let primeiro = numeroA>numeroB
let segundo = numeroA===numeroB
let terceiro = (numeroA%numeroB)===0
let quarto = (numeroB%numeroA)===0

console.log("O primeiro número é maior que o segundo?", primeiro)
console.log("O primeiro numero é igual ao segundo?", segundo)
console.log("O primeiro numero é divisível pelo segundo?", terceiro)
console.log("O segundo numero é divisível pelo primeiro?", quarto)



