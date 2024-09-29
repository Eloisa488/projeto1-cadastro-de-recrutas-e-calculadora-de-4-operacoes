//exercício 1
let nome = prompt("Qual é o seu nome?")
let sobrenome = prompt("Qual o seu sobrenome?")
let curso = prompt("Qual o seu curso?")
let dataNascimento = prompt("Qual é a data de nascimento") 
let idade = 2024 - dataNascimento

alert(`Olá ${nome} ${sobrenome} então você estuda ${curso}, e tem ${idade} anos. Legal!`)

// exercício 2
let num1 = parseInt(prompt("Digite um número"))
let num2 = parseInt(prompt("Digite um número"))

let soma = parseInt(num1) + parseInt(num2)
let subtracao = parseInt(num1) - parseInt(num2)
let multiplicacao = parseInt(num1) * parseInt(num2)
let divisao = parseInt(num1) / parseInt(num2)

alert(`
Resultado:
${num1} + ${num2} = ${soma}
${num1} - ${num2} = ${subtracao}
${num1} * ${num2} = ${multiplicacao}
${num1} / ${num2} = ${divisao}
`)