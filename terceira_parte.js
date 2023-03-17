function fatorial (n){
  if (n < 0)
    return Promise.reject("Valor não pode ser negativo")
  let res = 1
  for (let i = 2; i <= n; i++){
    res *= i
  }
  return Promise.resolve(res)
}

function chamadaComThenCatch(){
  fatorial(5)
  .then(res => console.log(res))
  .catch(erro => console.log("Erro: " + erro))

  fatorial(-1)
  .then(res => console.log(res))
  .catch(erro => console.log('Erro: ' + erro))
}

chamadaComThenCatch()

async function chamadaComAsyncAwait(){
  const f1 = await fatorial(5)
  console.log(f1)
  try{
    const f2 = await fatorial(-1)
    console.log(f2)
  }
  catch(e){
    console.log(e)
  }
}


// async function hello(nome){
//   return "Oi, " + nome
// }

// const res = hello("João")

// res.then(x => console.log(x))



// const res = hello("João")
// console.log(res)




// const axios = require ('axios')

// const appid = ''

// const q = 'Itu'

// const units = "metric"

// const lang = 'pt_BR'

// const cnt = 10

// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&lang=${lang}&cnt=${cnt}&appid=${appid}`

// // console.log(url)


// axios.get(url)
// .then((res) => {
//   //console.log(res)
//   return res.data
// })
// .then((res) => {
//   console.log(res.cnt)
//   return res
// })
// .then((res) => {
//   // return res['list']
//   return res.list 
// })
// .then((previsoes) => {
//   for (let previsao of previsoes){
//     console.log(`Min: ${previsao.main.temp_min}`)
//     console.log(`Max: ${previsao.main.temp_max}`)
//     console.log(`Desc: ${previsao.weather[0].description}`)
//     console.log(`Data: ${new Date(+previsao.dt * 1000).toLocaleDateString()}`)
//   }
//   return previsoes
// })
// .then((previsoes) => {
//     //devolver uma lista de previsões composta somente por aquelas que tenham temperatura minima diferente da temperatura maxima ou que tenham sensação térmica (feels_like) maior que 20
//     const lista = previsoes.filter(previsao => previsao.main.temp_min !== previsao.main.temp_max && previsao.main.feels_like > 20)
//     return lista
// })
// .then((previsoes) => {
//   for (let previsao of previsoes){
//     console.log(previsao)
//     console.log("**********************")
//   }
// })