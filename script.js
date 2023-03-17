
// Bruno
//numeros.map(num => num * num);
//const resultado = numeros.map(e => e * e);
//Vinicius
//produzir esse aqui, usando a map
//[1, 4, 9, 16, 25, 36]
//Rodrigo da Silva
//const res = numeros.map(function(n) {return n*n})
//Henricky
//const quadrado = numeros.map((numero) => {return Math.pow(numero, 2)})
//Lucas
//numeros.map((n) => console.log(n * n));
//Caio Ryan
// const numeros = [1,2,3,4,5,6]
//     const quadrado = numeros.map((numero)=>{return numero*numero})
//     console.log(quadrado)

const numeros = [1, 2, 3, 4, 5, 6]
function mapeamento(n){
  return n * n
}

let outroTeste = function (a, b){
  return a + b
}

console.log(outroTeste(2, 3))

const teste = mapeamento
//funções são cidadãs de primeira classe
console.log(numeros.map(mapeamento))


// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
// //["A", "A", "R", "A", "C"]
// const res = nomes.map((nome) => {return nome.charAt(0)})
// console.log(res)

// const apenasComA = nomes.filter((nome) => {return nome.startsWith("A")})

// console.log(apenasComA)
// const v2 = [1, 2, 3, 4]
// for (let i = 0; i < v2.length; i++)
//   console.log(v2[i])


//inicialização na declaração
// const v2 = [2, "abc", true]
// v2[0] = 5
// console.log(v2)


//declaração
// let v1 = []
// v1[0] = 3.4
// v1[10] = 2

// console.log(v1)
// console.log(v1.length)



// console.log (true == 1)
// console.log (1 == [1])
// console.log (null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log ([] == [])

// console.log(1 == 1)
// console.log(1 == "1")
// console.log(1 === 1)
// console.log(1 === "1")

// 2 === '2'
// const n1 = 2
// const n2 = "3"
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = Number(n3)
// console.log(n4)


// let a;

// var idade = 18
// console.log("Oi, " + nome)
// if (idade >= 18){
//   var nome = "João"
//   console.log(nome + " você pode dirigir")
// }
// console.log("Até mais, " + nome)
// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// //a variável linguagem pode ser redefinida
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)

// int a = 2;
// int a = 3;


// //const, let, var
// const nome1 = "José"
// nome1 = "Ana"
// const nome2 = 'Maria'
// const nome3 = `Pedro`
// const idade = 27
// let sexo = "M"
// sexo = "Masculino"

// let teste = "Um texto qualquer"
// teste = 123456
// teste = true

// var c = 2 + 3
// var d = "abcd"
// c = true
// d = 2.5